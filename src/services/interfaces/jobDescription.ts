export interface JobDescription {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary?: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number;
  maxExp: number;
  jobRole: string;
}

export interface JdListResponse {
  jdList: JobDescription[];
  totalCount: number;
}
