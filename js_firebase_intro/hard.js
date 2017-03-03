// harder Firebase Intro Prototype js file
var config = {
    apiKey: "AIzaSyDZXytaLOvVWUsLWztNwyenEpLMPKigFm4",
    authDomain: "lfz-student-database.firebaseapp.com",
    databaseURL: "https://lfz-student-database.firebaseio.com",
    storageBucket: "lfz-student-database.appspot.com",
    messagingSenderId: "344869651480"
};

firebase.initializeApp(config);

var dbRef = firebase.database();
var students = dbRef.ref('Students');

students.on('value', function(snapshot) {
    updateDom(snapshot.val());
});


window.addEventListener('load', function() {
    var addStudentButton = document.getElementById('add-student');
    addStudentButton.addEventListener('click', handleAddButtonClick)
    //var deleteStudentBUtton = document.getElementById('')
    var clearButton = document.getElementById('clear-form');
    clearButton.addEventListener('click', clearForm);
});

function handleAddButtonClick() {
    //students.push(formInfo);
    var newStudent = {};

    newStudent = getFormattedFormData();
    students.push(newStudent);

    clearForm();
    console.log(newStudent);

} 

function getFormattedFormData() {
    var formInfo = getFormData();
    var newStudent = {};
    newStudent['student_name'] = formInfo.sname;
    newStudent['student_id'] = formInfo.sid;
    newStudent['grade'] = formInfo.grade;
    newStudent['course'] = formInfo.course;
    return newStudent;
}

function updateDom(d){
    var table = $('.sgt tbody');
    table.html('');
    for(var key in d){
        if(d.hasOwnProperty(key)){
            (function() {
            var row = $('<tr>');
            var id = $('<td class="sid">' + d[key].student_id + '</td>');
            var name = $('<td class="sname">' + d[key].student_name + '</td>');
            var course = $('<td class="course">' + d[key].course + '</td>');
            var grade = $('<td class="grade">' + d[key].grade + '</td>');
            var actions = $('<td>', {'data-uid': key});
            var edit = $('<button>', {
                class: 'btn btn-sm btn-info edit',
                text: 'Edit'
            });
            var del = $('<button>', {
                class: 'btn btn-sm btn-danger delete',
                text: 'Delete'
            });

            var closureKey = key;

            del.on('click', () => {
                dbRef.ref('Students/' + closureKey).remove();
                console.log(closureKey);
            });

            edit.on('click', () => {
                var updates = {};
                var formData = getFormattedFormData();
                updates['Students/' + closureKey] = formData;
                dbRef.ref().update(updates);
                clearForm();
            });

            table.append(row.append(id, name, course, grade, actions.append(edit, del)));
        }());
        }
    }
}

function clearForm(){
    $('.sgt-form input').each(function(k, v){
        $(v).val('');
    });
}

function getFormData(){
    var output = {};
    $('.sgt-form input').each(function(k, v){
        var ele = $(v);
        output[ele.attr('id')] = ele.val();
    });

    return output;
}

function populateFormData(sid, sname, course, grade){
    $('#sid').val(sid);
    $('#sname').val(sname);
    $('#course').val(course);
    $('#grade').val(grade);
}

function getRowData(e) {
    return {
        sid: e.find('.sid').text(),
        sname: e.find('.sname').text(),
        course: e.find('.course').text(),
        grade: e.find('.grade').text()
    };
}