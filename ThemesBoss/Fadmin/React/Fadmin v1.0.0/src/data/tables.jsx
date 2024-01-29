
export const basicTable = {
  columns:[
    { Header: "#",  accessor: "id" },
    { Header: "First Name",  accessor: "first_name" },
    { Header: "Last Name",  accessor: "last_name" },
    { Header: "Username",  accessor: "username" },
  ],
  rows:[
    {id:1, first_name:"Mark",last_name:'Otto',username:"@mdo"},
    {id:2, first_name:"Jacob",last_name:'Thornton',username:"@fat"},
    {id:3, first_name:"Larry",last_name:'Bird',username:"@twitter"},	
  ]
}

export const salesData = {
    columns:[
        { Header: "#", accessor: "id" },
        { Header: "Date",  accessor: "date" },
        { Header: "Sales", accessor: "sales"  },
        { Header: "Cancelled", accessor: "cancelled"},
        { Header: "Status", accessor: "status"},
    ],
    rows:[
        {
          id: 1,
          date: '02/07/2023',
          sales: 114, 
          cancelled: 12,
          status: 'Pending'
        },
        {
          id: 2, 
          date: '02/10/2023',
          sales: 80,
          cancelled: 4,
          status: 'Success'
        },
        {
          id: 3,
          date: '12/08/2023',
          sales: 256,
          cancelled: 72,
          status: 'Pending'
        },
        {
          id: 4,
          date: '10/12/2023',
          sales: 118,
          cancelled: 4,
          status: 'Success'
        },
        {
          id: 5,
          date: '14/06/2023',
          sales: 88,
          cancelled: 9,
          status: 'Pending'
        },
        {
          id: 6,
          date: '21/09/2019',
          sales: 25,
          cancelled: 4,
          status: 'Pending'
        }
      ]
}

export const footableData = {
    columns:[
        { Header: "ID", accessor: "id" },
        { Header: "First Name",  accessor: "first_name" },
        { Header: "Last Name", accessor: "last_name"  },
        { Header: "Job Title", accessor: "job_title"},
        { Header: "Started On", accessor: "started_on"},
        { Header: "Date of Birth", accessor: "date_of_birth"},
    ],
    rows : [
        {'id': '11', 'first_name': 'Maria', 'last_name': 'Hosler', 'job_title': 'Auto Detailer', 'started_on': 'Jan 2011', 'date_of_birth': '10 Dec 1972'},
        {'id': '12', 'first_name': 'Isidra', 'last_name': 'Dragoo', 'job_title': 'Window Trimmer', 'started_on': 'Jan 2010', 'date_of_birth': '09 Feb 1974'},
        {'id': '13', 'first_name': 'Lakeshia', 'last_name': 'Sprinkle', 'job_title': 'Garment Presser', 'started_on': 'Oct 2012', 'date_of_birth': '12 Mar 1970'},
        {'id': '14', 'first_name': 'Marquia', 'last_name': 'Ardrey', 'job_title': 'Broadcast Maintenance Engineer', 'started_on': 'Aug 2010', 'date_of_birth': '15 Mar 1972'},
        {'id': '15', 'first_name': 'Jua', 'last_name': 'Bottom', 'job_title': 'Broadcast Maintenance Engineer', 'started_on': 'Oct 2012', 'date_of_birth': '06 Aug 1982'},
        {'id': '16', 'first_name': 'Delana', 'last_name': 'Sprouse', 'job_title': 'High School Librarian', 'started_on': 'Feb 2013', 'date_of_birth': '16 Oct 1966'},
        {'id': '17', 'first_name': 'Annamaria', 'last_name': 'Pennock', 'job_title': 'Photocopying Equipment Repairer', 'started_on': 'Mar 2010', 'date_of_birth': '06 Feb 1974'},
        {'id': '18', 'first_name': 'Junie', 'last_name': 'Leinen', 'job_title': 'Roller Skater', 'started_on': 'Jul 2012', 'date_of_birth': '07 Nov 1982'},
        {'id': '19', 'first_name': 'Charles', 'last_name': 'Hayton', 'job_title': 'Ships Electronic Warfare Officer', 'started_on': 'Feb 2011', 'date_of_birth': '14 Feb 1989'},
        {'id': '20', 'first_name': 'Lorriane', 'last_name': 'Roling', 'job_title': 'Industrial Waste Treatment Technician', 'started_on': 'Jul 2010', 'date_of_birth': '29 Jun 1977'}
    ]
}


export const compaiesData = {
  columns:[
      { 
        Header: "Company", 
        accessor: "company",
        // Cell method will provide the cell value; we pass it to render a custom component
        Cell: ({ cell: { value } }) => <th> {value.split(' ')[0]} <span className="co-name">{value.substr(value.indexOf(" ")+1)}</span></th>
      },
      { Header: "Last Trade",  accessor: "last_trade" },
      { Header: "Trade Time", accessor: "trade_time"  },
      { Header: "Change", accessor: "change"},
      { Header: "Prev Close", accessor: "prev_close"},
      { Header: "Open", accessor: "open"},
      { Header: "Bid", accessor: "bid"},
      { Header: "Ask", accessor: "ask"},
      { Header: "1y Target Est", accessor: "target_est"},
  ],
  rows:[
    {'company': 'GOOG Google Inc.', 'last_trade': '597.74', 'trade_time': '12:12PM', 'change': '14.81 (2.54%)', 'prev_close': '582.93', 'open': '597.95', 'bid': '597.73 x 100', 'ask': '597.91 x 300', 'target_est': '731.10'},
    {'company': 'AAPL Apple Inc.', 'last_trade': '378.94', 'trade_time': '12:22PM', 'change': '5.74 (1.54%)', 'prev_close': '373.20', 'open': '381.02', 'bid': '378.92 x 300', 'ask': '378.99 x 100', 'target_est': '505.94'},
    {'company': 'AMZN Amazon.com Inc.', 'last_trade': '191.55', 'trade_time': '12:23PM', 'change': '3.16 (1.68%)', 'prev_close': '188.39', 'open': '194.99', 'bid': '191.52 x 300', 'ask': '191.58 x 100', 'target_est': '240.32'},
    {'company': 'ORCL Oracle Corporation', 'last_trade': '31.15', 'trade_time': '12:44PM', 'change': '1.41 (4.72%)', 'prev_close': '29.74', 'open': '30.67', 'bid': '31.14 x 6500', 'ask': '31.15 x 3200', 'target_est': '36.11'},
    {'company': 'MSFT Microsoft Corporation', 'last_trade': '25.50', 'trade_time': '12:27PM', 'change': '0.66 (2.67%)', 'prev_close': '24.84', 'open': '25.37', 'bid': '25.50 x 71100', 'ask': '25.51 x 17800', 'target_est': '31.50'},
    {'company': 'CSCO Cisco Systems, Inc.', 'last_trade': '18.65', 'trade_time': '12:45PM', 'change': '0.97 (5.49%)', 'prev_close': '17.68', 'open': '18.23', 'bid': '18.65 x 10300', 'ask': '18.66 x 24000', 'target_est': '21.12'},
    {'company': 'YHOO Yahoo! Inc.', 'last_trade': '15.81', 'trade_time': '12:25PM', 'change': '0.11 (0.67%)', 'prev_close': '15.70', 'open': '15.94', 'bid': '15.79 x 6100', 'ask': '15.80 x 17000', 'target_est': '18.16'},
    {'company': 'GOOG Google Inc.', 'last_trade': '597.74', 'trade_time': '12:12PM', 'change': '14.81 (2.54%)', 'prev_close': '582.93', 'open': '597.95', 'bid': '597.73 x 100', 'ask': '597.91 x 300', 'target_est': '731.10'},
    {'company': 'AAPL Apple Inc.', 'last_trade': '378.94', 'trade_time': '12:22PM', 'change': '5.74 (1.54%)', 'prev_close': '373.20', 'open': '381.02', 'bid': '378.92 x 300', 'ask': '378.99 x 100', 'target_est': '505.94'},
    {'company': 'AMZN Amazon.com Inc.', 'last_trade': '191.55', 'trade_time': '12:23PM', 'change': '3.16 (1.68%)', 'prev_close': '188.39', 'open': '194.99', 'bid': '191.52 x 300', 'ask': '191.58 x 100', 'target_est': '240.32'},
    {'company': 'ORCL Oracle Corporation', 'last_trade': '31.15', 'trade_time': '12:44PM', 'change': '1.41 (4.72%)', 'prev_close': '29.74', 'open': '30.67', 'bid': '31.14 x 6500', 'ask': '31.15 x 3200', 'target_est': '36.11'},
    {'company': 'MSFT Microsoft Corporation', 'last_trade': '25.50', 'trade_time': '12:27PM', 'change': '0.66 (2.67%)', 'prev_close': '24.84', 'open': '25.37', 'bid': '25.50 x 71100', 'ask': '25.51 x 17800', 'target_est': '31.50'},
    {'company': 'CSCO Cisco Systems, Inc.', 'last_trade': '18.65', 'trade_time': '12:45PM', 'change': '0.97 (5.49%)', 'prev_close': '17.68', 'open': '18.23', 'bid': '18.65 x 10300', 'ask': '18.66 x 24000', 'target_est': '21.12'},
    {'company': 'YHOO Yahoo! Inc.', 'last_trade': '15.81', 'trade_time': '12:25PM', 'change': '0.11 (0.67%)', 'prev_close': '15.70', 'open': '15.94', 'bid': '15.79 x 6100', 'ask': '15.80 x 17000', 'target_est': '18.16'},
    {'company': 'GOOG Google Inc.', 'last_trade': '597.74', 'trade_time': '12:12PM', 'change': '14.81 (2.54%)', 'prev_close': '582.93', 'open': '597.95', 'bid': '597.73 x 100', 'ask': '597.91 x 300', 'target_est': '731.10'},
    {'company': 'AAPL Apple Inc.', 'last_trade': '378.94', 'trade_time': '12:22PM', 'change': '5.74 (1.54%)', 'prev_close': '373.20', 'open': '381.02', 'bid': '378.92 x 300', 'ask': '378.99 x 100', 'target_est': '505.94'},
    {'company': 'AMZN Amazon.com Inc.', 'last_trade': '191.55', 'trade_time': '12:23PM', 'change': '3.16 (1.68%)', 'prev_close': '188.39', 'open': '194.99', 'bid': '191.52 x 300', 'ask': '191.58 x 100', 'target_est': '240.32'},
    {'company': 'ORCL Oracle Corporation', 'last_trade': '31.15', 'trade_time': '12:44PM', 'change': '1.41 (4.72%)', 'prev_close': '29.74', 'open': '30.67', 'bid': '31.14 x 6500', 'ask': '31.15 x 3200', 'target_est': '36.11'},
    {'company': 'MSFT Microsoft Corporation', 'last_trade': '25.50', 'trade_time': '12:27PM', 'change': '0.66 (2.67%)', 'prev_close': '24.84', 'open': '25.37', 'bid': '25.50 x 71100', 'ask': '25.51 x 17800', 'target_est': '31.50'},
    {'company': 'CSCO Cisco Systems, Inc.', 'last_trade': '18.65', 'trade_time': '12:45PM', 'change': '0.97 (5.49%)', 'prev_close': '17.68', 'open': '18.23', 'bid': '18.65 x 10300', 'ask': '18.66 x 24000', 'target_est': '21.12'},
    {'company': 'YHOO Yahoo! Inc.', 'last_trade': '15.81', 'trade_time': '12:25PM', 'change': '0.11 (0.67%)', 'prev_close': '15.70', 'open': '15.94', 'bid': '15.79 x 6100', 'ask': '15.80 x 17000', 'target_est': '18.16'},
    {'company': 'GOOG Google Inc.', 'last_trade': '597.74', 'trade_time': '12:12PM', 'change': '14.81 (2.54%)', 'prev_close': '582.93', 'open': '597.95', 'bid': '597.73 x 100', 'ask': '597.91 x 300', 'target_est': '731.10'},
    {'company': 'AAPL Apple Inc.', 'last_trade': '378.94', 'trade_time': '12:22PM', 'change': '5.74 (1.54%)', 'prev_close': '373.20', 'open': '381.02', 'bid': '378.92 x 300', 'ask': '378.99 x 100', 'target_est': '505.94'},
    {'company': 'AMZN Amazon.com Inc.', 'last_trade': '191.55', 'trade_time': '12:23PM', 'change': '3.16 (1.68%)', 'prev_close': '188.39', 'open': '194.99', 'bid': '191.52 x 300', 'ask': '191.58 x 100', 'target_est': '240.32'},
    {'company': 'ORCL Oracle Corporation', 'last_trade': '31.15', 'trade_time': '12:44PM', 'change': '1.41 (4.72%)', 'prev_close': '29.74', 'open': '30.67', 'bid': '31.14 x 6500', 'ask': '31.15 x 3200', 'target_est': '36.11'},
    {'company': 'MSFT Microsoft Corporation', 'last_trade': '25.50', 'trade_time': '12:27PM', 'change': '0.66 (2.67%)', 'prev_close': '24.84', 'open': '25.37', 'bid': '25.50 x 71100', 'ask': '25.51 x 17800', 'target_est': '31.50'},
    {'company': 'CSCO Cisco Systems, Inc.', 'last_trade': '18.65', 'trade_time': '12:45PM', 'change': '0.97 (5.49%)', 'prev_close': '17.68', 'open': '18.23', 'bid': '18.65 x 10300', 'ask': '18.66 x 24000', 'target_est': '21.12'},
    {'company': 'YHOO Yahoo! Inc.', 'last_trade': '15.81', 'trade_time': '12:25PM', 'change': '0.11 (0.67%)', 'prev_close': '15.70', 'open': '15.94', 'bid': '15.79 x 6100', 'ask': '15.80 x 17000', 'target_est': '18.16'},
  ]
}



		


