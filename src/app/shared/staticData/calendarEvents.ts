export default [
    {
        id: 'event1',
        title: 'Frontend Interview – Techify Inc.',
        start: '2025-05-13T10:00:00',
        end: '2025-05-13T11:00:00',
        allDay: false,
        backgroundColor: '#4caf50',
        textColor: '#fff',
        editable: true,
        extendedProps: {
          company: 'Techify Inc.',
          jobTitle: 'Frontend Developer',
          contact: 'recruiter@techify.com',
          notes: 'Prepare for behavioral questions and Angular test.'
        }
      },
      {
        id: 'event2',
        title: 'AI Cover Letter Generated',
        start: '2025-05-10T08:30:00',
        end: '2025-05-10T08:45:00',
        allDay: false,
        backgroundColor: '#00bcd4',
        textColor: '#fff',
        editable: false,
        extendedProps: {
          tool: 'AI Assistant',
          notes: 'Reviewed and customized before applying.'
        }
      },
      {
        id: 'event3',
        title: 'Submit Resume – NeuralNexus',
        start: '2025-05-11T09:00:00',
        end: '2025-05-11T09:15:00',
        allDay: false,
        backgroundColor: '#ff9800',
        textColor: '#000',
        editable: true,
        extendedProps: {
          company: 'NeuralNexus',
          jobTitle: 'Full-Stack Engineer',
          source: 'Indeed',
          resumeVersion: 'v2.1'
        }
      },
      {
        id: 'event4',
        title: 'Follow-Up Reminder – BioTech Labs',
        start: '2025-05-14T15:00:00',
        end: '2025-05-14T15:15:00',
        allDay: false,
        backgroundColor: '#9c27b0',
        textColor: '#fff',
        editable: true,
        extendedProps: {
          company: 'BioTech Labs',
          contact: 'susan.hiring@biotechlabs.com',
          method: 'Email',
          notes: 'Check in about next interview round'
        }
      },
      {
        id: 'event5',
        title: 'Job Posting Saved – QuantumAI',
        start: '2025-05-09T13:00:00',
        end: '2025-05-09T13:05:00',
        allDay: false,
        backgroundColor: '#607d8b',
        textColor: '#fff',
        editable: false,
        extendedProps: {
          company: 'QuantumAI',
          jobTitle: 'AI Research Intern',
          source: 'LinkedIn',
          status: 'Saved for later review'
        }
      },
      {
        id: 'event6',
        title: 'Offer Call – SuretyBonds.com',
        start: '2025-05-16T14:30:00',
        end: '2025-05-16T15:00:00',
        allDay: false,
        backgroundColor: '#e91e63',
        textColor: '#fff',
        editable: true,
        extendedProps: {
          company: 'SuretyBonds.com',
          contact: 'hiring@suretybonds.com',
          offerDetails: 'Discuss benefits and salary package',
          notes: 'Prepare questions about remote policy'
        }
      }];
