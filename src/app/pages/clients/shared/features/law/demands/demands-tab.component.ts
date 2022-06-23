import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { getNullableDataValue, getNullableDateValue, getSelectorValue } from '../../../../../../@core/utils/helpers';
import { OpportunityService } from '../../../../../../@core/backend/common/services/opportunity.service';
import { CustomValidator } from '../../../../../../@core/backend/common/services/validation.service';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'ngx-demands-tab',
  templateUrl: './demands-tab.component.html',
  styleUrls: ['./demands-tab.component.scss'],
})
export class DemandsTabComponent implements OnInit {
  protected readonly unsubscribe$ = new Subject<void>();
  data: Observable<any>;
  form: FormGroup;
  private role: string | string[] = [];
  @Input() service: OpportunityService;
  @Input() id: string;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.initForm(this.fb);
    this.data = this.service.getAdaDemands(this.id).pipe(takeUntil(this.unsubscribe$));
    this.data.subscribe(d => {
      this.setFormValues(this.form, d, this.service);
    })
  }

  private setIntakeFormData(opportunityId: String) {
    return {
      BarrierType: {
        table: 'ADA',
        column: 'BarrierType',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      TypeComplaing: {
        table: 'ADA',
        column: 'TypeComplaing',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      TravelStart: {
        table: 'ADA',
        column: 'TravelStart',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      TravelEnd: {
        table: 'ADA',
        column: 'TravelEnd',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      ClientID: {
        table: 'Opportunity',
        column: 'ClientID',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      DateVisited1: {
        table: 'ADA',
        column: 'DateVisited1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      DateVisited2: {
        table: 'ADA',
        column: 'DateVisited2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      FiledDate: {
        table: 'CaseInfo',
        column: 'FiledDate',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      WebDescription: {
        table: 'ADA',
        column: 'WebDescription',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      AttorneyStatusNotes: {
        table: 'AttorneyUpdate',
        column: 'AttorneyStatusNotes',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      FileSetup: {
        table: 'ADA',
        column: 'FileSetup',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Comp1: {
        table: 'ADA',
        column: 'Comp1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      BarriersIdentified: {
        table: 'ADA',
        column: 'BarriersIdentified',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Comp2: {
        table: 'ADA',
        column: 'Comp2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      DefendantIdent: {
        table: 'ADA',
        column: 'DefendantIdent',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Comp3: {
        table: 'ADA',
        column: 'Comp3',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      AdditionalResource: {
        table: 'ADA',
        column: 'AdditionalResource',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Comp4: {
        table: 'ADA',
        column: 'Comp4',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      ComplaintDrafted: {
        table: 'ADA',
        column: 'ComplaintDrafted',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Comp5: {
        table: 'ADA',
        column: 'Comp5',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      AssessmentNeed: {
        table: 'ADA',
        column: 'AssessmentNeed',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Comp6: {
        table: 'ADA',
        column: 'Comp6',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      COURTDUEOPEN3: {
        table: 'CaseInfo',
        column: 'COURTDUEOPEN3',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      CourtDueOpen2: {
        table: 'CaseInfo',
        column: 'CourtDueOpen2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      ABOther: {
        table: 'ADA',
        column: 'ABOther',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      SubmittedNPO3: {
        table: 'TransTracking',
        column: 'SubmittedNPO3',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      ClientRecvd7: {
        table: 'Tracking',
        column: 'ClientRecvd7',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Settled_11: {
        table: 'Tracking',
        column: 'Settled_11',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Settled_18: {
        table: 'Tracking',
        column: 'Settled_18',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Settled_20: {
        table: 'Tracking',
        column: 'Settled_20',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Step16Completed: {
        table: 'Tracking',
        column: 'Step16Completed',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      aStatusPI: {
        table: 'TransTracking',
        column: 'aStatusPI',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      RemediationNotes: {
        table: 'ADA',
        column: 'RemediationNotes',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      StoreFront: {
        table: 'Parties Involved',
        column: 'StoreFront',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      StoreAdd: {
        table: 'Parties Involved',
        column: 'StoreAdd',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      StoreCity: {
        table: 'Parties Involved',
        column: 'StoreCity',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      StoreST: {
        table: 'Parties Involved',
        column: 'StoreST',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      StoreZip: {
        table: 'Parties Involved',
        column: 'StoreZip',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Defendant1Long: {
        table: 'Parties Involved',
        column: 'Defendant1Long',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party4Name: {
        table: 'Parties Involved',
        column: 'Party4Name',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party4Title: {
        table: 'Parties Involved',
        column: 'Party4Title',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party4address: {
        table: 'Parties Involved',
        column: 'Party4address',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party4city: {
        table: 'Parties Involved',
        column: 'Party4city',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party4zip: {
        table: 'Parties Involved',
        column: 'Party4zip',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party4state: {
        table: 'Parties Involved',
        column: 'Party4state',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      InHouseCo1: {
        table: 'Parties Involved',
        column: 'InHouseCo1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Defendant1: {
        table: 'Parties Involved',
        column: 'Defendant1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party4phone: {
        table: 'Parties Involved',
        column: 'Party4phone',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party4email: {
        table: 'Parties Involved',
        column: 'Party4email',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Agency19: {
        table: 'Compliance',
        column: 'Agency19',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party3misc2: {
        table: 'Parties Involved',
        column: 'Party3misc2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party3co: {
        table: 'Parties Involved',
        column: 'Party3co',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party3name: {
        table: 'Parties Involved',
        column: 'Party3name',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party3Title: {
        table: 'Parties Involved',
        column: 'Party3Title',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party3address: {
        table: 'Parties Involved',
        column: 'Party3address',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party3city: {
        table: 'Parties Involved',
        column: 'Party3city',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party3zip: {
        table: 'Parties Involved',
        column: 'Party3zip',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party3state: {
        table: 'Parties Involved',
        column: 'Party3state',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def5_1: {
        table: 'Parties Involved',
        column: 'Def5_1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def5_2: {
        table: 'Parties Involved',
        column: 'Def5_2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def5_3: {
        table: 'Parties Involved',
        column: 'Def5_3',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def5_4: {
        table: 'Parties Involved',
        column: 'Def5_4',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def5_5: {
        table: 'Parties Involved',
        column: 'Def5_5',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def5_7: {
        table: 'Parties Involved',
        column: 'Def5_7',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def5_8: {
        table: 'Parties Involved',
        column: 'Def5_8',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def5_9: {
        table: 'Parties Involved',
        column: 'Def5_9',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def5_13: {
        table: 'Parties Involved',
        column: 'Def5_13',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def4_1: {
        table: 'Parties Involved',
        column: 'Def4_1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def4_2: {
        table: 'Parties Involved',
        column: 'Def4_2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def4_3: {
        table: 'Parties Involved',
        column: 'Def4_3',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def4_4: {
        table: 'Parties Involved',
        column: 'Def4_4',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def4_5: {
        table: 'Parties Involved',
        column: 'Def4_5',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def4_7: {
        table: 'Parties Involved',
        column: 'Def4_7',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def4_8: {
        table: 'Parties Involved',
        column: 'Def4_8',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def4_9: {
        table: 'Parties Involved',
        column: 'Def4_9',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Def4_13: {
        table: 'Parties Involved',
        column: 'Def4_13',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1Name: {
        table: 'Parties Involved',
        column: 'Party1Name',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1Co: {
        table: 'Parties Involved',
        column: 'Party1Co',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1direct: {
        table: 'Parties Involved',
        column: 'Party1direct',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1phone: {
        table: 'Parties Involved',
        column: 'Party1phone',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1mobile: {
        table: 'Parties Involved',
        column: 'Party1mobile',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1fax: {
        table: 'Parties Involved',
        column: 'Party1fax',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1email: {
        table: 'Parties Involved',
        column: 'Party1email',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1address: {
        table: 'Parties Involved',
        column: 'Party1address',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1city: {
        table: 'Parties Involved',
        column: 'Party1city',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1state: {
        table: 'Parties Involved',
        column: 'Party1state',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1zip: {
        table: 'Parties Involved',
        column: 'Party1zip',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party1misc1: {
        table: 'Parties Involved',
        column: 'Party1misc1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2Name: {
        table: 'Parties Involved',
        column: 'Party2Name',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2Co: {
        table: 'Parties Involved',
        column: 'Party2Co',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2direct: {
        table: 'Parties Involved',
        column: 'Party2direct',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2phone: {
        table: 'Parties Involved',
        column: 'Party2phone',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2mobile: {
        table: 'Parties Involved',
        column: 'Party2mobile',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2fax: {
        table: 'Parties Involved',
        column: 'Party2fax',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2email: {
        table: 'Parties Involved',
        column: 'Party2email',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2address: {
        table: 'Parties Involved',
        column: 'Party2address',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2city: {
        table: 'Parties Involved',
        column: 'Party2city',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2state: {
        table: 'Parties Involved',
        column: 'Party2state',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2zip: {
        table: 'Parties Involved',
        column: 'Party2zip',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2misc1: {
        table: 'Parties Involved',
        column: 'Party2misc1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      TCPA_State: {
        table: 'Law',
        column: 'TCPA_State',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Trustee1State: {
        table: 'Parties Involved',
        column: 'Trustee1State',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party2misc2: {
        table: 'Parties Involved',
        column: 'Party2misc2',
        identifier: opportunityId,
        key: 'OpportunityId',
      },
      Party3misc1: {
        table: 'Parties Involved',
        column: 'Party3misc1',
        identifier: opportunityId,
        key: 'OpportunityId',
      },




    }
  }


  initForm(fb: FormBuilder): FormGroup {
    const form = fb.group({
      Party2misc1: fb.control(''),
      BarrierType: fb.control(''),
      TypeComplaing: fb.control(''),
      TravelStart: fb.control(''),
      TravelEnd: fb.control(''),
      ClientID: fb.control(''),
      DateVisited1: fb.control(''),
      DateVisited2: fb.control(''),
      FiledDate: fb.control(''),
      WebDescription: fb.control(''),
      AttorneyStatusNotes: fb.control(''),
      FileSetup: fb.control(''),
      Comp1: fb.control(''),
      BarriersIdentified: fb.control(''),
      Comp2: fb.control(''),
      DefendantIdent: fb.control(''),
      Comp3: fb.control(''),
      AdditionalResource: fb.control(''),
      Comp4: fb.control(''),
      ComplaintDrafted: fb.control(''),
      Comp5: fb.control(''),
      AssessmentNeed: fb.control(''),
      Comp6: fb.control(''),
      COURTDUEOPEN3: fb.control(''),
      CourtDueOpen2: fb.control(''),
      ABOther: fb.control(''),
      SubmittedNPO3: fb.control(''),
      ClientRecvd7: fb.control(''),
      Settled_11: fb.control(''),
      Settled_18: fb.control(''),
      Settled_20: fb.control(''),
      Step16Completed: fb.control(''),
      aStatusPI: fb.control(''),
      RemediationNotes: fb.control(''),
      StoreFront: fb.control(''),
      StoreAdd: fb.control(''),
      StoreCity: fb.control(''),
      StoreST: fb.control(''),
      StoreZip: fb.control(''),
      Defendant1Long: fb.control(''),
      Party4Name: fb.control(''),
      Party4Title: fb.control(''),
      Party4address: fb.control(''),
      Party4city: fb.control(''),
      Party4zip: fb.control(''),
      Party4state: fb.control(''),
      InHouseCo1: fb.control(''),
      Defendant1: fb.control(''),
      Party4phone: fb.control(''),
      Party4email: fb.control(''),
      Party3misc2: fb.control(''),
      Party3co: fb.control(''),
      Party3name: fb.control(''),
      Party3Title: fb.control(''),
      Party3address: fb.control(''),
      Party3city: fb.control(''),
      Party3zip: fb.control(''),
      Party3state: fb.control(''),
      Def5_1: fb.control(''),
      Def5_2: fb.control(''),
      Def5_3: fb.control(''),
      Def5_4: fb.control(''),
      Def5_5: fb.control(''),
      Def5_7: fb.control(''),
      Def5_8: fb.control(''),
      Def5_9: fb.control(''),
      Def4_1: fb.control(''),
      Def4_2: fb.control(''),
      Def4_3: fb.control(''),
      Def4_4: fb.control(''),
      Def4_5: fb.control(''),
      Def4_7: fb.control(''),
      Def4_8: fb.control(''),
      Def4_9: fb.control(''),
      Party1Name: fb.control(''),
      Party1Co: fb.control(''),
      Party1direct: fb.control(''),
      Party1phone: fb.control(''),
      Party1mobile: fb.control(''),
      Party1fax: fb.control(''),
      Party1email: fb.control(''),
      Party1address: fb.control(''),
      Party1city: fb.control(''),
      Party1state: fb.control(''),
      Party1zip: fb.control(''),
      Party2Name: fb.control(''),
      Party2Co: fb.control(''),
      Party2direct: fb.control(''),
      Party2phone: fb.control(''),
      Party2mobile: fb.control(''),
      Party2fax: fb.control(''),
      Party2email: fb.control(''),
      Party2address: fb.control(''),
      Party2city: fb.control(''),
      Party2state: fb.control(''),
      Party2zip: fb.control(''),
      TCPA_State: fb.control(''),
      Trustee1State: fb.control(''),
      Party3misc1: fb.control(''),














    }, { updateOn: 'blur' });
    return form;
  }

  setFormValues(form: FormGroup, data: any, service: OpportunityService) {
    form.setValue({
      Party2misc1: getNullableDataValue(data.Party2misc1, ''),
      BarrierType: getNullableDataValue(data.BarrierType, ''),
      TypeComplaing: getSelectorValue(data.TypeComplaing, ['Slope', 'Bathroom', 'Wheel Chair', 'Hotel Platform Name', 'Reservations', 'Other'], 'Other'),
      TravelStart: getNullableDateValue(data.TravelStart, ''),
      TravelEnd: getNullableDateValue(data.TravelEnd, ''),
      ClientID: getNullableDataValue(data.ClientID, ''),
      DateVisited1: getNullableDateValue(data.DateVisited1, ''),
      DateVisited2: getNullableDateValue(data.DateVisited2, ''),
      FiledDate: getNullableDateValue(data.FiledDate, ''),
      WebDescription: getNullableDataValue(data.WebDescription, ''),
      AttorneyStatusNotes: getNullableDataValue(data.AttorneyStatusNotes, ''),
      FileSetup: getNullableDateValue(data.FileSetup, ''),
      Comp1: getNullableDataValue(data.Comp1, ''),
      BarriersIdentified: getNullableDateValue(data.BarriersIdentified, ''),
      Comp2: getNullableDataValue(data.Comp2, ''),
      DefendantIdent: getNullableDateValue(data.DefendantIdent, ''),
      Comp3: getNullableDataValue(data.Comp3, ''),
      AdditionalResource: getNullableDateValue(data.AdditionalResource, ''),
      Comp4: getNullableDataValue(data.Comp4, ''),
      ComplaintDrafted: getNullableDateValue(data.ComplaintDrafted, ''),
      Comp5: getNullableDataValue(data.Comp5, ''),
      AssessmentNeed: getNullableDateValue(data.AssessmentNeed, ''),
      Comp6: getNullableDataValue(data.Comp6, ''),
      COURTDUEOPEN3: getNullableDateValue(data.COURTDUEOPEN3, ''),
      CourtDueOpen2: getNullableDateValue(data.CourtDueOpen2, ''),
      ABOther: getNullableDataValue(data.ABOther, ''),
      SubmittedNPO3: getNullableDateValue(data.SubmittedNPO3, ''),
      ClientRecvd7: getNullableDateValue(data.ClientRecvd7, ''),
      Settled_11: getNullableDateValue(data.Settled_11, ''),
      Settled_18: getNullableDateValue(data.Settled_18, ''),
      Settled_20: getNullableDateValue(data.Settled_20, ''),
      Step16Completed: getNullableDateValue(data.Step16Completed, ''),
      aStatusPI: getNullableDataValue(data.aStatusPI, ''),
      RemediationNotes: getNullableDataValue(data.RemediationNotes, ''),
      StoreFront: getNullableDataValue(data.StoreFront, ''),
      StoreAdd: getNullableDataValue(data.StoreAdd, ''),
      StoreCity: getNullableDataValue(data.StoreCity, ''),
      StoreST: getNullableDataValue(data.StoreST, ''),
      StoreZip: getNullableDataValue(data.StoreZip, ''),
      Defendant1Long: getNullableDataValue(data.Defendant1Long, ''),
      Party4Name: getNullableDataValue(data.Party4Name, ''),
      Party4Title: getNullableDataValue(data.Party4Title, ''),
      Party4address: getNullableDataValue(data.Party4address, ''),
      Party4city: getNullableDataValue(data.Party4city, ''),
      Party4zip: getNullableDataValue(data.Party4zip, ''),
      Party4state: getNullableDataValue(data.Party4state, ''),
      InHouseCo1: getNullableDataValue(data.InHouseCo1, ''),
      Defendant1: getNullableDataValue(data.Defendant1, ''),
      Party4phone: getNullableDataValue(data.Party4phone, ''),
      Party4email: getNullableDataValue(data.Party4email, ''),
      Party3misc2: getNullableDataValue(data.Party3misc2, ''),
      Party3co: getNullableDataValue(data.Party3co, ''),
      Party3name: getNullableDataValue(data.Party3name, ''),
      Party3Title: getNullableDataValue(data.Party3Title, ''),
      Party3address: getNullableDataValue(data.Party3address, ''),
      Party3city: getNullableDataValue(data.Party3city, ''),
      Party3zip: getNullableDataValue(data.Party3zip, ''),
      Party3state: getNullableDataValue(data.Party3state, ''),
      Def5_1: getNullableDataValue(data.Def5_1, ''),
      Def5_2: getNullableDataValue(data.Def5_2, ''),
      Def5_3: getNullableDataValue(data.Def5_3, ''),
      Def5_4: getNullableDataValue(data.Def5_4, ''),
      Def5_5: getNullableDataValue(data.Def5_5, ''),
      Def5_7: getNullableDataValue(data.Def5_7, ''),
      Def5_8: getNullableDataValue(data.Def5_8, ''),
      Def5_9: getNullableDataValue(data.Def5_9, ''),
      Def4_1: getNullableDataValue(data.Def4_1, ''),
      Def4_2: getNullableDataValue(data.Def4_2, ''),
      Def4_3: getNullableDataValue(data.Def4_3, ''),
      Def4_4: getNullableDataValue(data.Def4_4, ''),
      Def4_5: getNullableDataValue(data.Def4_5, ''),
      Def4_7: getNullableDataValue(data.Def4_7, ''),
      Def4_8: getNullableDataValue(data.Def4_8, ''),
      Def4_9: getNullableDataValue(data.Def4_9, ''),
      Party1Name: getNullableDataValue(data.Party1Name, ''),
      Party1Co: getNullableDataValue(data.Party1Co, ''),
      Party1direct: getNullableDataValue(data.Party1direct, ''),
      Party1phone: getNullableDataValue(data.Party1phone, ''),
      Party1mobile: getNullableDataValue(data.Party1mobile, ''),
      Party1fax: getNullableDataValue(data.Party1fax, ''),
      Party1email: getNullableDataValue(data.Party1email, ''),
      Party1address: getNullableDataValue(data.Party1address, ''),
      Party1city: getNullableDataValue(data.Party1city, ''),
      Party1state: getNullableDataValue(data.Party1state, ''),
      Party1zip: getNullableDataValue(data.Party1zip, ''),
      Party2Name: getNullableDataValue(data.Party2Name, ''),
      Party2Co: getNullableDataValue(data.Party2Co, ''),
      Party2direct: getNullableDataValue(data.Party2direct, ''),
      Party2phone: getNullableDataValue(data.Party2phone, ''),
      Party2mobile: getNullableDataValue(data.Party2mobile, ''),
      Party2fax: getNullableDataValue(data.Party2fax, ''),
      Party2email: getNullableDataValue(data.Party2email, ''),
      Party2address: getNullableDataValue(data.Party2address, ''),
      Party2city: getNullableDataValue(data.Party2city, ''),
      Party2state: getNullableDataValue(data.Party2state, ''),
      Party2zip: getNullableDataValue(data.Party2zip, ''),
      TCPA_State: getNullableDataValue(data.TCPA_State, ''),
      Trustee1State: getNullableDataValue(data.Trustee1State, ''),
      Party3misc1: getNullableDataValue(data.Party3misc1, ''),




    });
    this.pushFormValues(form, data, service);
  }
  private pushFormValues(form: FormGroup, data: any, service: OpportunityService) {
    const intakeFormData = this.setIntakeFormData(data.opportunityId);
    const controls = form.controls;
    for (const property in controls) {
      if (controls.hasOwnProperty(property)) {
        controls[property].setAsyncValidators(CustomValidator.validate(
          service,
          data.opportunityId,
          intakeFormData[property],
        ));
      }
    }
  }
}
