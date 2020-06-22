import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreadcrumbsData, TimelinePropType } from 'src/app/components/types';
import { Application } from 'src/app/models/application';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStoreService } from 'src/app/models/user-store.service';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
import { STATUS_COLORS, STATUS, APP_SOURCE, APP_ATTRIBS } from 'src/app/models/constants';
import { KeyValue } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.css']
})
export class ApplicationViewComponent implements OnInit {

  breadcrumbsData: BreadcrumbsData = {
    current: {
      name: '',
      url: ''
    },
    paths: [
      { name: 'Journeys', url: '/journeys' },
    ]
  };
  journeyid: string;
  inputApplication: Application;
  currApplicationDetails: Application;
  detailsUpdated = false;
  timelineProps: TimelinePropType;
  STATUS_COLORS = STATUS_COLORS;
  ATTRIBS = APP_ATTRIBS;
  statuses = [
    {value: STATUS.IN_REVIEW.toString(), viewValue: STATUS.IN_REVIEW.toString()},
    {value: STATUS.ASSESSMENT.toString(), viewValue: STATUS.ASSESSMENT.toString()},
    {value: STATUS.INTERVIEW.toString(), viewValue: STATUS.INTERVIEW.toString()},
    {value: STATUS.OFFER.toString(), viewValue: STATUS.OFFER.toString()},
    {value: STATUS.REJECTED.toString(), viewValue: STATUS.REJECTED.toString()},
    {value: STATUS.STALE.toString(), viewValue: STATUS.STALE.toString()}
  ];
  sources = [
    {value: APP_SOURCE.JOB_BOARD.toString(), viewValue: APP_SOURCE.JOB_BOARD.toString()},
    {value: APP_SOURCE.REFERRAL.toString(), viewValue: APP_SOURCE.REFERRAL.toString()},
    {value: APP_SOURCE.FAIR.toString(), viewValue: APP_SOURCE.FAIR.toString()},
    {value: APP_SOURCE.OTHER.toString(), viewValue: APP_SOURCE.OTHER.toString()},
  ];

  @ViewChild(TimelineComponent, { static: true }) timeline: TimelineComponent;
  @ViewChild('notesTextArea', { static: true }) notesTextArea: ElementRef<any>;

  constructor(
    private route: ActivatedRoute,
    private userStore: UserStoreService,
    private router: Router
  ) { }

  ngOnInit() {
    let appid: string;
    this.route.params.subscribe(params => {
      this.journeyid = params.id;
      appid = params.appref;
    });
    this.inputApplication = this.userStore.getApplication(this.journeyid, +appid); // TODO: sort out application id thing
    this.currApplicationDetails = Object.assign(new Application(), this.inputApplication);
    if (!this.inputApplication) {
      console.log('ApplicationViewComponent: no application retrieved with id:', appid);
      this.router.navigate(['/journeys']);
      return;
    } else {
      this.breadcrumbsData.current.name = 'Application';
      this.breadcrumbsData.current.url = `/journeys/${this.journeyid}/${appid}`;
      this.breadcrumbsData.paths.push({
        name: this.userStore.getJourney(this.journeyid).title,
        url: `/journeys/${this.journeyid}`
      });
      this.timelineProps = {
        data: this.inputApplication.timeline,
        colorMappings: STATUS_COLORS
      };
      // this.timeline.draw();
    }
    // make textarea responsive to tab key press
    this.notesTextArea.nativeElement.addEventListener('keydown', (event) => this.keyboardHandler(event));
  }

  updateField(attrib: string, value: string) {
    this.detailsUpdated = true;
    if (this.currApplicationDetails[attrib]) {
      if (attrib === this.ATTRIBS.STATUS) {
        this.currApplicationDetails.status = value; // handles adding the new status to the application's timeline
      } else {
        this.currApplicationDetails[attrib] = value;
      }
    }
  }

  saveChanges() {
    // this.inputApplication = this.currApplicationDetails;
    this.userStore.updateExistingApplication(this.journeyid, this.currApplicationDetails);
    this.detailsUpdated = false;
  }

  /**
   * KeyValue pipe ordering by entry
   */
  originalOrder(a: KeyValue<number, string>, b: KeyValue<number, string>): number {
    return 0;
  }

  keyboardHandler(event: KeyboardEvent) {
    if (event.keyCode === 9) { // handles tab click within textarea
      this.notesTextArea.nativeElement.value += '\t';
      event.preventDefault();
    }
  }

}
