import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../../../../@core/backend/common/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User, UserData } from '../../../../../../@core/interfaces/common/users';
import { ROLES } from '../../../../../../@auth/roles';
import { NbRoleProvider } from '@nebular/security';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../@core/utils/helpers';

@Component({
    selector: 'ngx-lam-view-tab',
    templateUrl: './lam-view-tab.component.html',
    styleUrls: ['./lam-view-tab.component.scss'],
})
export class LamviewTabComponent implements OnInit {
    contactName: '';
    form: FormGroup;
    users: User[] = [];
    private role: string | string[] = [];
    @Input() service: ContactService;
    @Input() data: Observable<any>;

    constructor(
        private fb: FormBuilder,
        private usersService: UserData,
        private roleService: NbRoleProvider,
    ) { }

    ngOnInit() {
        this.roleService.getRole().subscribe(r => {
            if (r.includes(ROLES.ADMIN)) {
                this.role = r;
                this.usersService.list(1, 90000).subscribe(u => {
                    const items: User[] = u.items;
                    this.users = items.sort((a, b) => {
                        if (a.lastName > b.lastName) {
                            return -1;
                        }
                        if (b.lastName > a.lastName) {
                            return 1;
                        }
                        if (b.lastName === a.lastName) {
                            if (a.firstName > b.firstName) {
                                return -1;
                            }
                            if (b.firstName > a.firstName) {
                                return 1;
                            }
                        }
                        return 0;
                    });
                });
            }
        });
        this.form = this.initForm(this.fb);
        this.loadAccountTestData(this.form);

    }

    loadAccountData(form: FormGroup, response: Observable<any>) {
        response.subscribe((data) => {
            this.contactName = data.companyName;
            this.setFormValues(form, data);
        });
    }

    loadAccountTestData(form: FormGroup) {
        const data = {
            webKarlin: '11/28/2000',
            complaintFiled: '11/28/2000',
            complaintSent: '11/28/2000',
            complaintServed: '11/28/2000',
            methodService: '11/28/2000',
            processService: 'processService',
            answerDeadline: '11/28/2000',
            answerDeadline2: '11/28/2000',
            doeDefendant: '11/28/2000',
            confRecieved: '11/28/2000',
            doeServed: '11/28/2000',
            initDefDismissed: '11/28/2000',
            amendComplaint: '11/28/2000',
            approval: '11/28/2000',
            facFiled: '11/28/2000',
            facSentService: '11/28/2000',
            facServed: '11/28/2000',
            methodService2: 'methodService2',
            processService2: 'processService2',
            newAnswerDeadline: '11/28/2000',
            responseFiled: '11/28/2000',
            response: 'response',
            response2Filed: '11/28/2000',
            proceedDefault: '11/28/2000',
            checkbox: 'checkbox',
            requestDefaultFiled: '11/28/2000',
            enteredClerk: '11/28/2000',
            defaultRuling: '11/28/2000',
            judDeadline: '11/28/2000',
            defaultJudFiled: '11/28/2000',
            upHearing: '11/28/2000',
            defaultStatus: 'defaultStatus',
            ppwToMark: '11/28/2000',
            ppwApprvdMark: '11/28/2000',
            certifiedJudgement: '11/28/2000',
            abstractJudgement: '11/28/2000',
            approvedRecord: '11/28/2000',
            judgementRecord: '11/28/2000',
            satJudgement: '11/28/2000',
            inspectionReview: '11/28/2000',
            inspectionDate: '11/28/2000',
            inspectionComplete: '11/28/2000',
            capReportRcvd: '11/28/2000',
            ccdaDrafted: '11/28/2000',
            ccdaSent: '11/28/2000',
            ccdaDismissal: '11/28/2000',
            ccdaDismissalSent: '11/28/2000',
            propoundDiscovery: '11/28/2000',
            propoundedD1: '11/28/2000',
            responseDEF1: '11/28/2000',
            discoveryRcvdD1: '11/28/2000',
            discoveryReviewed: 'discoveryReviewed',
            mcSentD1: '11/28/2000',
            mtc: '11/28/2000',
            propoundedDiscoveryD2: '11/28/2000',
            responseDue: '11/28/2000',
            discoveryRcvdD2: '11/28/2000',
            discoveryReviewedD2: 'discoveryReviewedD2',
            mcSentD2: '11/28/2000',
            discoveryServedD2: '11/28/2000',
            responseDEF2: '11/28/2000',
            discoverySent: '11/28/2000',
            serviceType: 'serviceType',
            oscJuris: '11/28/2000',
            oscOutcome: 'oscOutcome',
            flaggedReview: '11/28/2000',
            initiateMsj: '11/28/2000',
            draftedMsj: 'DraftedMSJ',
            msjDrafter: '11/28/2000',
            approved: 'checkbox',
            draftedMsj2: '11/28/2000',
            filedMsj: '11/28/2000',
            cmcHearing: '11/28/2000',
            cmsDue: '11/28/2000',
            cmsSent: '11/28/2000',
            cmsFiled: '11/28/2000',
            oscSchedule: '11/28/2000',
            oscDismissal: '11/28/2000',
            adrCaseStatement: '11/28/2000',
            mscDate: '11/28/2000',
            mediationBrief: '11/28/2000',
            adrDate: '11/28/2000',
            adrSent: '11/28/2000',
            adrCutoff: '11/28/2000',
            motionCutoff: '11/28/2000',
            conferDeadlineRe26: '11/28/2000',
            deadlineRule26: '11/28/2000',
            deadlineToAmend: '11/28/2000',
            initialDisclosures: '11/28/2000',
            eneStatement: '11/28/2000',
            eneInspection: '11/28/2000',
            initialDesig: '11/28/2000',
            expertDemand: '11/28/2000',
            expertDisclosure: '11/28/2000',
            expertDiscovery: '11/28/2000',
            hearMoExperts: '11/28/2000',
            discoveryCutoff: '11/28/2000',
            dispositiveMotionCutoff: '11/28/2000',
            preTrialConfrence: '11/28/2000',
            trialDate: '11/28/2000',
            motionPending: 'motionPending',
            responseDate: '11/28/2000',
            hearingDate: '11/28/2000',
            motionFiled: '11/28/2000',
            noticeSettlement: '11/28/2000',
            deadlineDismiss: '11/28/2000',
            requestDismissal: 'RequestDismissal',
            requestDismissalFiled: '11/28/2000',
            storeFront: 'storeFront',
            address: 'Address',
            bizLink: 'url',
            offenderComp: 'input',
            offenderName: 'input',
            title: 'input',
            ownerLink: 'url',
        };
        this.setFormValues(form, data);
    }

    isAdmin() {
        return this.role.includes(ROLES.ADMIN);
    }

    initForm(fb: FormBuilder): FormGroup {
        const form = fb.group({
            draftedMsj2: fb.control(''),
            approved: fb.control(''),
            ppwApprvdMark: fb.control(''),
            processService2: fb.control(''),
            methodService2: fb.control(''),
            approval: fb.control(''),
            complaintFiled: fb.control(''),
            webKarlin: fb.control(''),
            complaintSent: fb.control(''),
            complaintServed: fb.control(''),
            methodService: fb.control(''),
            processService: fb.control(''),
            answerDeadline: fb.control(''),
            answerDeadline2: fb.control(''),
            doeDefendant: fb.control(''),
            confRecieved: fb.control(''),
            doeServed: fb.control(''),
            initDefDismissed: fb.control(''),
            amendComplaint: fb.control(''),
            facFiled: fb.control(''),
            facSentService: fb.control(''),
            facServed: fb.control(''),
            newAnswerDeadline: fb.control(''),
            responseFiled: fb.control(''),
            response: fb.control(''),
            response2Filed: fb.control(''),
            proceedDefault: fb.control(''),
            requestDefaultFiled: fb.control(''),
            enteredClerk: fb.control(''),
            defaultRuling: fb.control(''),
            judDeadline: fb.control(''),
            defaultJudFiled: fb.control(''),
            upHearing: fb.control(''),
            defaultStatus: fb.control(''),
            ppwToMark: fb.control(''),
            certifiedJudgement: fb.control(''),
            abstractJudgement: fb.control(''),
            approvedRecord: fb.control(''),
            judgementRecord: fb.control(''),
            satJudgement: fb.control(''),
            inspectionReview: fb.control(''),
            inspectionDate: fb.control(''),
            inspectionComplete: fb.control(''),
            capReportRcvd: fb.control(''),
            ccdaDrafted: fb.control(''),
            ccdaSent: fb.control(''),
            ccdaDismissal: fb.control(''),
            ccdaDismissalSent: fb.control(''),
            propoundDiscovery: fb.control(''),
            propoundedD1: fb.control(''),
            responseDEF1: fb.control(''),
            discoveryRcvdD1: fb.control(''),
            discoveryReviewed: fb.control(''),
            mcSentD1: fb.control(''),
            mtc: fb.control(''),
            propoundedDiscoveryD2: fb.control(''),
            responseDue: fb.control(''),
            discoveryRcvdD2: fb.control(''),
            discoveryReviewedD2: fb.control(''),
            mcSentD2: fb.control(''),
            discoveryServedD1: fb.control(''),
            serviceType: fb.control(''),
            discoveryServedD2: fb.control(''),
            responseDEF2: fb.control(''),
            discoverySent: fb.control(''),
            oscJuris: fb.control(''),
            oscOutcome: fb.control(''),
            flaggedReview: fb.control(''),
            initiateMsj: fb.control(''),
            draftedMsj: fb.control(''),
            msjDrafter: fb.control(''),
            filedMsj: fb.control(''),
            cmcHearing: fb.control(''),
            cmsDue: fb.control(''),
            cmsSent: fb.control(''),
            cmsFiled: fb.control(''),
            oscSchedule: fb.control(''),
            oscDismissal: fb.control(''),
            adrCaseStatement: fb.control(''),
            mscDate: fb.control(''),
            mediationBrief: fb.control(''),
            adrDate: fb.control(''),
            adrSent: fb.control(''),
            adrCutoff: fb.control(''),
            motionCutoff: fb.control(''),
            conferDeadlineRe26: fb.control(''),
            deadlineRule26: fb.control(''),
            deadlineToAmend: fb.control(''),
            initialDisclosures: fb.control(''),
            eneStatement: fb.control(''),
            eneInspection: fb.control(''),
            initialDesig: fb.control(''),
            expertDisclosure: fb.control(''),
            expertDemand: fb.control(''),
            expertDiscovery: fb.control(''),
            hearMoExperts: fb.control(''),
            discoveryCutoff: fb.control(''),
            dispositiveMotionCutoff: fb.control(''),
            preTrialConfrence: fb.control(''),
            trialDate: fb.control(''),
            motionPending: fb.control(''),
            responseDate: fb.control(''),
            hearingDate: fb.control(''),
            motionFiled: fb.control(''),
            noticeSettlement: fb.control(''),
            noticeSettlementFiled: fb.control(''),
            deadlineDismiss: fb.control(''),
            requestDismissal: fb.control(''),
            requestDismissalFiled: fb.control(''),
            storeFront: fb.control(''),
            address: fb.control(''),
            bizLink: fb.control(''),
            offenderComp: fb.control(''),
            offenderName: fb.control(''),
            title: fb.control(''),
            checkbox: fb.control(''),
            ownerLink: fb.control(''),
        }, { updateOn: 'blur' });
        return form;
    }

    setFormValues(form: FormGroup, data: any) {
        form.setValue({
            draftedMsj2: getNullableDataValue(data.draftedMsj2, ''),
            approved: getNullableDataValue(data.approved, ''),
            ppwApprvdMark: getNullableDataValue(data.ppwApprvdMark, ''),
            processService2: getNullableDataValue(data.processService2, ''),
            methodService2: getNullableDataValue(data.methodService2, ''),
            approval: getNullableDataValue(data.approval, ''),
            complaintFiled: getNullableDataValue(data.completedDate, ''),
            complaintSent: getNullableDataValue(data.date),
            complaintServed: getNullableDataValue(data.assigned, ''),
            webKarlin: getNullableDataValue(data.judgeName, ''),
            methodService: getNullableDataValue(data.tentativeRuling, ''),
            processService: getNullableDataValue(data.courtHouse),
            answerDeadline: getNullableDataValue(data.caseNumber, ''),
            answerDeadline2: getNullableDataValue(data.department, ''),
            doeDefendant: getNullableDataValue(data.phone, ''),
            confRecieved: getNullableDataValue(data.removeFed, ''),
            doeServed: getNullableDataValue(data.judge, ''),
            initDefDismissed: getNullableDataValue(data.statJudge, ''),
            amendComplaint: getNullableDataValue(data.companyName, ''),
            facFiled: getNullableDataValue(data.address1, ''),
            facSentService: getNullableDataValue(data.zipcode, ''),
            facServed: getNullableDataValue(data.city, ''),
            newAnswerDeadline: getNullableDataValue(data.state, ''),
            responseFiled: getNullableDataValue(data.county, ''),
            response: getNullableDataValue(data.email, ''),
            response2Filed: getNullableDataValue(data.clientType, ''),
            proceedDefault: getNullableDataValue(data.contactId, ''),
            requestDefaultFiled: getNullableDateValue(data.createDate, ''),
            enteredClerk: getNullableDataValue(data.notes, ''),
            defaultRuling: getNullableDataValue(data.subscribe, ''),
            judDeadline: getNullableDataValue(data.subscribe, ''),
            defaultJudFiled: getNullableDataValue(data.subscribe, ''),
            upHearing: getNullableDataValue(data.subscribe, ''),
            defaultStatus: getNullableDataValue(data.subscribe, ''),
            ppwToMark: getNullableDataValue(data.subscribe, ''),
            certifiedJudgement: getNullableDataValue(data.subscribe, ''),
            abstractJudgement: getNullableDataValue(data.subscribe, ''),
            approvedRecord: getNullableDataValue(data.subscribe, ''),
            judgementRecord: getNullableDataValue(data.subscribe, ''),
            satJudgement: getNullableDataValue(data.subscribe, ''),
            inspectionReview: getNullableDataValue(data.subscribe, ''),
            inspectionDate: getNullableDataValue(data.subscribe, ''),
            inspectionComplete: getNullableDataValue(data.subscribe, ''),
            capReportRcvd: getNullableDataValue(data.subscribe, ''),
            ccdaDrafted: getNullableDataValue(data.subscribe, ''),
            ccdaSent: getNullableDataValue(data.subscribe, ''),
            ccdaDismissal: getNullableDataValue(data.subscribe, ''),
            ccdaDismissalSent: getNullableDataValue(data.subscribe, ''),
            propoundDiscovery: getNullableDataValue(data.subscribe, ''),
            propoundedD1: getNullableDataValue(data.subscribe, ''),
            responseDEF1: getNullableDataValue(data.subscribe, ''),
            discoveryRcvdD1: getNullableDataValue(data.subscribe, ''),
            discoveryRcvdD2: getNullableDataValue(data.subscribe, ''),
            discoveryReviewed: getNullableDataValue(data.subscribe, ''),
            discoveryReviewedD2: getNullableDataValue(data.subscribe, ''),
            mcSentD1: getNullableDataValue(data.subscribe, ''),
            mtc: getNullableDataValue(data.subscribe, ''),
            propoundedDiscoveryD2: getNullableDataValue(data.subscribe, ''),
            responseDue: getNullableDataValue(data.subscribe, ''),
            mcSentD2: getNullableDataValue(data.subscribe, ''),
            discoveryServedD1: getNullableDataValue(data.subscribe, ''),
            serviceType: getNullableDataValue(data.subscribe, ''),
            discoveryServedD2: getNullableDataValue(data.subscribe, ''),
            responseDEF2: getNullableDataValue(data.subscribe, ''),
            discoverySent: getNullableDataValue(data.subscribe, ''),
            oscJuris: getNullableDataValue(data.subscribe, ''),
            oscOutcome: getNullableDataValue(data.subscribe, ''),
            flaggedReview: getNullableDataValue(data.subscribe, ''),
            initiateMsj: getNullableDataValue(data.subscribe, ''),
            draftedMsj: getNullableDataValue(data.subscribe, ''),
            msjDrafter: getNullableDataValue(data.subscribe, ''),
            filedMsj: getNullableDataValue(data.subscribe, ''),
            cmcHearing: getNullableDataValue(data.subscribe, ''),
            cmsDue: getNullableDataValue(data.subscribe, ''),
            cmsSent: getNullableDataValue(data.subscribe, ''),
            cmsFiled: getNullableDataValue(data.subscribe, ''),
            oscSchedule: getNullableDataValue(data.subscribe, ''),
            oscDismissal: getNullableDataValue(data.subscribe, ''),
            adrCaseStatement: getNullableDataValue(data.subscribe, ''),
            mscDate: getNullableDataValue(data.subscribe, ''),
            mediationBrief: getNullableDataValue(data.subscribe, ''),
            adrDate: getNullableDataValue(data.subscribe, ''),
            adrSent: getNullableDataValue(data.subscribe, ''),
            adrCutoff: getNullableDataValue(data.subscribe, ''),
            motionCutoff: getNullableDataValue(data.subscribe, ''),
            conferDeadlineRe26: getNullableDataValue(data.subscribe, ''),
            deadlineRule26: getNullableDataValue(data.subscribe, ''),
            deadlineToAmend: getNullableDataValue(data.subscribe, ''),
            initialDisclosures: getNullableDataValue(data.subscribe, ''),
            eneStatement: getNullableDataValue(data.subscribe, ''),
            eneInspection: getNullableDataValue(data.subscribe, ''),
            initialDesig: getNullableDataValue(data.subscribe, ''),
            expertDisclosure: getNullableDataValue(data.subscribe, ''),
            expertDemand: getNullableDataValue(data.subscribe, ''),
            expertDiscovery: getNullableDataValue(data.subscribe, ''),
            hearMoExperts: getNullableDataValue(data.subscribe, ''),
            discoveryCutoff: getNullableDataValue(data.subscribe, ''),
            dispositiveMotionCutoff: getNullableDataValue(data.subscribe, ''),
            preTrialConfrence: getNullableDataValue(data.subscribe, ''),
            trialDate: getNullableDataValue(data.subscribe, ''),
            motionPending: getNullableDataValue(data.subscribe, ''),
            responseDate: getNullableDataValue(data.subscribe, ''),
            hearingDate: getNullableDataValue(data.subscribe, ''),
            motionFiled: getNullableDataValue(data.subscribe, ''),
            noticeSettlement: getNullableDataValue(data.subscribe, ''),
            noticeSettlementFiled: getNullableDataValue(data.subscribe, ''),
            deadlineDismiss: getNullableDataValue(data.subscribe, ''),
            requestDismissal: getNullableDataValue(data.subscribe, ''),
            requestDismissalFiled: getNullableDataValue(data.subscribe, ''),
            storeFront: getNullableDataValue(data.subscribe, ''),
            address: getNullableDataValue(data.subscribe, ''),
            bizLink: getNullableDataValue(data.subscribe, ''),
            offenderComp: getNullableDataValue(data.subscribe, ''),
            offenderName: getNullableDataValue(data.subscribe, ''),
            title: getNullableDataValue(data.subscribe, ''),
            checkbox: getNullableDataValue(data.subscribe, ''),
            ownerLink: getNullableDataValue(data.subscribe, ''),
        });
    }
}