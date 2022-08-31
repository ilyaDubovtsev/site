$(document).ready(function () {
    $('#guids-field').val(generateUuid() + '\n'
        + generateUuid() + '\n'
        + generateUuid() + '\n'
        + generateUuid() + '\n'
        + generateUuid() + '\n'
        + generateUuid() + '\n'
        + generateUuid() + '\n'
        + generateUuid() + '\n'
        + generateUuid() + '\n'
        + generateUuid() + '\n'
    );
});

function generateUuid() {
    var uuidValue = "";

    for (var k = 0; k < 32; k++) {
        var randomValue = Math.random() * 16 | 0;

        if (k == 8 || k == 12 || k == 16 || k == 20) {
            uuidValue += "-"
        }

        uuidValue += randomValue.toString(16);
    }

    return uuidValue;
}  
