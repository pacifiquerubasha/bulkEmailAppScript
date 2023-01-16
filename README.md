# Bulk Email Sender Apps Script Function 

This Apps Script function allows you to send bulk emails from data stored in a Google sheet. 

## Prerequisites 

- A Google account with access to Google Sheets and Apps Script
- Data stored in a Google Sheet 

## Installation 

1. Open the Google Sheet containing your data. 
![GoogleSheet](https://github.com/pacifiquerubasha/bulkEmailAppScript/blob/main/assets/sheet.png)

2. Select Extensions > Apps Script. This will open the Apps Script editor. 
![Appscript](https://github.com/pacifiquerubasha/bulkEmailAppScript/blob/main/assets/navigation.png)

3. Copy and paste the code from this repository into the script editor and save it as "BulkEmailSender". 
![Appscript Editor](https://github.com/pacifiquerubasha/bulkEmailAppScript/blob/main/assets/editor.png)

4. Follow the prompts to configure your email settings, such as the location of your emails in the spreadsheet, the attachments, variables to make email customized for the receiver... 
5. Click Run to execute the script
![Appscript Run](https://github.com/pacifiquerubasha/bulkEmailAppScript/blob/main/assets/run.png)


## Usage 

The Bulk Email Sender function will read data from the columns specified from your spreadsheet and use that information to generate personalized emails for each row of data in your sheet. The function will then send those emails using the settings you provided when configuring it earlier. 

