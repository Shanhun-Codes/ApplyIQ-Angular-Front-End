export interface Event {
    id: string;
    title: string;
    start: Date; 
    end?: string;  
    allDay?: boolean;
    backgroundColor?: string;
    textColor?: string;
    editable?: boolean;
    extendedProps?: EventExtendedProps;
  }
  
  export interface EventExtendedProps {
    jobTitle?: string;
    company?: string;
    contact?: string;
    method?: string;
    source?: string;
    resumeVersion?: string;
    tool?: string;
    offerDetails?: string;
    jobId?: number;
    notes?: string;
    status?: string;
  }
  