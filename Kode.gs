function doPost(e) {
  // Periksa apakah objek 'e' didefinisikan
  if (e && e.parameter) {
    var id = SpreadsheetApp.openById('1Vgq3SHmosCwp3G5CCfG5LQU7U9UK6lSgDMorhb5Bum0'); 

    var name = e.parameter.name;
    var email = e.parameter.email;
    var number = e.parameter.number;
    var message = e.parameter.message;

    id.appendRow([name, email, number, message]);

    var jsonObject = {
      status: 'berhasil'
    };

    var JSONString = JSON.stringify(jsonObject);
    var JSONOutput = ContentService.createTextOutput(JSONString);
    JSONOutput.setMimeType(ContentService.MimeType.JSON);
    return JSONOutput;
  } else {
    // Tanggapi ketika objek 'e' tidak didefinisikan atau tidak memiliki properti 'parameter'
    var errorObject = {
      status: 'gagal',
      message: 'Objek e tidak didefinisikan atau tidak memiliki properti parameter'
    };

    var errorString = JSON.stringify(errorObject);
    var errorOutput = ContentService.createTextOutput(errorString);
    errorOutput.setMimeType(ContentService.MimeType.JSON);
    return errorOutput;
  }
}