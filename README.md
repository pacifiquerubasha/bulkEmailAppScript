# bulkEmailAppScript


function myFunction() {
  var emails = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("B82:B86").getValues();
  var names = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange("A82:A86").getValues();


const makeMessage = (name)=>{
  return `
  <p>Greetings to ${name}!</p>

<p>Thank you for your attention</p>

<p>Regards, </p>

<p>John Doe<br/>
Fullstack Javascript developer<br/>
</p>
  
  `
}

  var subject = 'Request for Internship Opportunity';
  var file = DriveApp.getFileById('1pg35fOsfsfsg324esRuWsgf3ySV-hBuZr4l6jDOmB')

  emails.forEach(([email], index)=>{
      Logger.log({name:names[index], email});

      MailApp.sendEmail(email, subject, "", {htmlBody: makeMessage(names[index]), attachments: [file.getAs(MimeType.PDF)]}, );
  })

  // var emailQuota = MailApp.getRemainingDailyQuota();
  // Logger.log("Remaining quota", emailQuota);
}
