export interface LegalSection {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface LegalPageData {
  title: string;
  effectiveDate: string;
  intro?: string;
  sections: LegalSection[];
}
