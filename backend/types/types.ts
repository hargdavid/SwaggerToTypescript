export type NonBossClientShortInfo = {
  clientId: number;
  organizationNumber: string;
  shortName: string;
  fullName: string;
  status: NonBossClientShortInfoStatusEnum;
};

export enum NonBossClientShortInfoStatusEnum {
  Prospect,
  Active,
  Inactive,
  Deleted,
  VpcOnly,
}


export type ClientInstrument = {
  clientInstrumentId: number;
  clientId: number;
  instrumentType: string;
  instrumentSort: string;
  isin: string;
  fullName: string;
  issuedQuantity: number;
  quantityType: string;
  votingRight: number;
  issuedVotes: number;
  changeDate: string;
};

export type Client = {
  clientId: number;
  status: ClientStatusEnum;
  fullName: string;
  companyCode: string;
  shortName: string;
  streetAddress: string;
  coAddress: string;
  postalCode: string;
  postalBox: string;
  city: string;
  country: string;
  phoneNumber: string;
  website: string;
  invoicingStreetAddress: string;
  invoicingCoAddress: string;
  invoicingPostalCode: string;
  invoicingPostalBox: string;
  invoicingCity: string;
  invoicingCountry: string;
  contractKey: string;
  contractDate: string;
  omxindex: ClientOmxindexEnum;
  primaryManagerId: string;
  secondaryManagerId: string;
  comment: string;
  instruments: ClientInstrument[];
};

export enum ClientStatusEnum {
  Prospect,
  Active,
  Inactive,
  Deleted,
  VpcOnly,
}

export enum ClientOmxindexEnum {
  LargeCap,
  MidCap,
  SmallCap,
  Other,
  None,
}


export type BossClientShortInfo = {
  clientId: number;
  fullName: string;
  organizationNumber: string;
  primaryManagerId: string;
  primaryManagerName: string;
  contractKey: string;
  status: BossClientShortInfoStatusEnum;
};

export enum BossClientShortInfoStatusEnum {
  Prospect,
  Active,
  Inactive,
  Deleted,
  VpcOnly,
}


export type BossClientShortInfoIEnumerablePagedResponse = {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  data: BossClientShortInfo[];
};

export type Contact = {
  contactId: number;
  clientId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  jobTitle: ContactJobTitleEnum;
  isActive: boolean;
  isMainContact: boolean;
  isStatisticsContact: boolean;
  isInvoicingContact: boolean;
  userCategory: ContactUserCategoryEnum;
  notes: string;
};

export enum ContactJobTitleEnum {
  VD,
  CEO,
  CFO,
  IR,
  Legal,
  Communication,
}

export enum ContactUserCategoryEnum {
  NoAccess,
  BossClient,
  BossLight,
  ReportAccess,
}


export type MeetingShortInfo = {
  meetingId: number;
  meetingName: string;
  clientId: number;
  clientName: string;
  primaryClientManagerId: string;
  primaryClientManagerName: string;
  meetingType: MeetingShortInfoMeetingTypeEnum;
  meetingDate: string;
  meetingStatus: MeetingShortInfoMeetingStatusEnum;
};

export enum MeetingShortInfoMeetingTypeEnum {
  AnnualGeneralMeeting,
  ExtraordinaryGeneralMeeting,
}

export enum MeetingShortInfoMeetingStatusEnum {
  New,
  Quote,
  Confirmed,
  Rejected,
}


export type MeetingShortInfoIEnumerablePagedResponse = {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  data: MeetingShortInfo[];
};

export type QuoteShortInfo = {
  quoteId: number;
  clientId: number;
  clientName: string;
  meetingId: number;
  meetingName: string;
  quoteAmountExVat: number;
  meetingServiceLevel: QuoteShortInfoMeetingServiceLevelEnum;
  sentDate: string;
  acceptedDate: string;
  status: QuoteShortInfoStatusEnum;
};

export enum QuoteShortInfoMeetingServiceLevelEnum {
  BossComplete,
  BossNotify,
  BossClient,
  BossProxy,
  None,
  NotSet,
}

export enum QuoteShortInfoStatusEnum {
  New,
  QuoteSent,
  FinalAccepted,
  Rejected,
}


export type QuoteShortInfoIEnumerablePagedResponse = {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  data: QuoteShortInfo[];
};

export type ContactShortInfo = {
  contactId: number;
  contactName: string;
  clientId: number;
  clientName: string;
  phoneNumber: string;
  emailAddress: string;
  jobTitle: string;
  isActive: boolean;
};

export type ContactShortInfoIEnumerablePagedResponse = {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  data: ContactShortInfo[];
};

export type TimeSpan = {
  ticks: number;
  days: number;
  hours: number;
  milliseconds: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalHours: number;
  totalMilliseconds: number;
  totalMinutes: number;
  totalSeconds: number;
};

export type Property = {
  propertyId: number;
  propertyCode: PropertyPropertyCodeEnum;
  propertySortOrder: number;
  propertyNameSv: string;
  propertyNameEn: string;
  notes: string;
};

export enum PropertyPropertyCodeEnum {
  CustomDate,
  PressReleaseSent,
  NoticePublished,
  RegistrationPeriodStart,
  RegistrationPeriodPhoneEnd,
  RegistrationPeriodWebEnd,
  PostalVotingEnd,
  AnnualReportAvailable,
  PrintedAnnualReport,
  RecordDate,
  MeetingRegistrationDeadline,
  ShareholderRegisterLoaded,
  ShareholderRegisterResponsible,
  EntryCardsSent,
  ShareholderRegisterComplete,
  VotingInstructionsComplete,
  PlanningMeeting,
  FollowupMeeting,
  ChecklistApproved,
  ShareholderRegisterOrdered,
  DayBeforeExDividendDate,
  DividendConfirmation,
  RecordDateForDividend,
  DividendPayDate,
  SpecialActivity,
  PressRelease,
  MeetingNoticePublicationDate,
}


export type DateProperty = {
  propertyId: number;
  dependsOnPropertyId: number;
  isEditable: boolean;
  defaultDaysRelativeToRelatedDate: number;
  defaultDayType: DatePropertyDefaultDayTypeEnum;
  defaultBeforeAfter: DatePropertyDefaultBeforeAfterEnum;
  
};

export enum DatePropertyDefaultDayTypeEnum {
  WorkDay,
  BankDay,
}

export enum DatePropertyDefaultBeforeAfterEnum {
  Before,
  After,
}


export type MeetingDateProperty = {
  meetingDatePropertyId: number;
  meetingId: number;
  datePropertyId: number;
  propertyCode: MeetingDatePropertyPropertyCodeEnum;
  actualDate: string;
  dateType: MeetingDatePropertyDateTypeEnum;
  customName: string;
  notes: string;
  
};

export enum MeetingDatePropertyPropertyCodeEnum {
  CustomDate,
  PressReleaseSent,
  NoticePublished,
  RegistrationPeriodStart,
  RegistrationPeriodPhoneEnd,
  RegistrationPeriodWebEnd,
  PostalVotingEnd,
  AnnualReportAvailable,
  PrintedAnnualReport,
  RecordDate,
  MeetingRegistrationDeadline,
  ShareholderRegisterLoaded,
  ShareholderRegisterResponsible,
  EntryCardsSent,
  ShareholderRegisterComplete,
  VotingInstructionsComplete,
  PlanningMeeting,
  FollowupMeeting,
  ChecklistApproved,
  ShareholderRegisterOrdered,
  DayBeforeExDividendDate,
  DividendConfirmation,
  RecordDateForDividend,
  DividendPayDate,
  SpecialActivity,
  PressRelease,
  MeetingNoticePublicationDate,
}

export enum MeetingDatePropertyDateTypeEnum {
  ServiceLevelCalculated,
  ServiceLevelEditable,
  Custom,
}


export type Meeting = {
  meetingId: number;
  meetingName: string;
  clientId: number;
  venueId: number;
  meetingDate: string;
  
  meetingType: MeetingMeetingTypeEnum;
  serviceLevel: MeetingServiceLevelEnum;
  meetingStatus: MeetingMeetingStatusEnum;
  hasPostalVoting: boolean;
  callCentreTelephone: string;
  callCentreForwardNumber: string;
  callCentrePostalAddress: string;
  callCentreRecordedOffHoursMessageSv: string;
  callCentreRecordedOffHoursMessageEn: string;
  handlingSpecificShareholders: string;
  meetingNotificationLinkSv: string;
  meetingNotificationLinkEn: string;
  specialArrangementsActivitiesDescription: string;
  notes: string;
  datesProperties: MeetingDateProperty[];
  daysToMeeting: number;
};

export enum MeetingMeetingTypeEnum {
  AnnualGeneralMeeting,
  ExtraordinaryGeneralMeeting,
}

export enum MeetingServiceLevelEnum {
  BossComplete,
  BossNotify,
  BossClient,
  BossProxy,
  None,
  NotSet,
}

export enum MeetingMeetingStatusEnum {
  New,
  Quote,
  Confirmed,
  Rejected,
}


export type ResponseMessage = {
  code: string;
  message: string;
};

export type MeetingKeyPersonShortInfo = {
  meetingKeyPersonId: number;
  companyName: string;
  isClientContact: boolean;
  firstName: string;
  lastName: string;
  meetingRole: string;
  phoneNumber: string;
  emailAddress: string;
};

export type MeetingKeyPersonShortInfoIEnumerablePagedResponse = {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  data: MeetingKeyPersonShortInfo[];
};

export type MeetingPerson = {
  meetingPersonId: number;
  meetingId: number;
  firstName: string;
  lastName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  meetingRole: string;
  notes: string;
};

export type MeetingContact = {
  meetingContactId: number;
  contactId: number;
  meetingId: number;
  meetingRole: string;
  notes: string;
  
  contactClientName: string;
};

export type MeetingDocumentShortInfo = {
  meetingDocumentId: number;
  meetingId: number;
  documentType: MeetingDocumentShortInfoDocumentTypeEnum;
  languageCode: string;
  description: string;
};

export enum MeetingDocumentShortInfoDocumentTypeEnum {
  MeetingNotification,
}


export type MeetingDocumentShortInfoIEnumerablePagedResponse = {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  data: MeetingDocumentShortInfo[];
};

export type MeetingAgendaShortInfo = {
  meetingAgendaId: number;
  meetingId: number;
  versionNumber: number;
  status: MeetingAgendaShortInfoStatusEnum;
  updatedAt: string;
};

export enum MeetingAgendaShortInfoStatusEnum {
  Draft,
  Final,
}


export type MeetingAgendaShortInfoIEnumerablePagedResponse = {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  data: MeetingAgendaShortInfo[];
};

export type MeetingAgendaItem = {
  meetingAgendaItemId: number;
  meetingAgendaId: number;
  primarySortOrder: number;
  secondarySortOrder: number;
  languageCode: string;
  title: string;
  description: string;
  isResolution: boolean;
  option1: string;
  option2: string;
  option3: string;
};

export type MeetingAgenda = {
  meetingAgendaId: number;
  meetingId: number;
  description: string;
  updatedAt: string;
  meetingAgendaItem: MeetingAgendaItem[];
};

export type Quote = {
  quoteId: number;
  clientId: number;
  meetingId: number;
  quoteAmountExVat: number;
  sentDate: string;
  validUntilDate: string;
  acceptedDate: string;
  rejectedDate: string;
  status: QuoteStatusEnum;
  notes: string;
};

export enum QuoteStatusEnum {
  New,
  QuoteSent,
  FinalAccepted,
  Rejected,
}


export type User = {
  userId: string;
  email: string;
  firstName: string;
  surname: string;
  phoneNumber: string;
  isActive: boolean;
  isDeleted: boolean;
  isMainUser: boolean;
};

export type Venue = {
  venueId: number;
  venueName: string;
  meetingRoom: string;
  streetAddress: string;
  postalCode: string;
  postalBox: string;
  city: string;
  country: string;
  phoneNumber: string;
  additionalPhoneNumber: string;
  emailAddress: string;
  mainContact: string;
  website: string;
  evaluation: string;
  additionalInfo: string;
  isActive: boolean;
  updatedBy: string;
  updatedAt: string;
};

export type VenueShortInfo = {
  venueId: number;
  venueName: string;
  streetAddress: string;
  city: string;
  isActive: boolean;
};

export type VenueShortInfoIEnumerablePagedResponse = {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  data: VenueShortInfo[];
};

