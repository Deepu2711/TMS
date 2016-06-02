
/* *****  Full Calender ***** */
$("#sel_cal_all").change(function () {
    $(this).find("option:selected").each(function () {
        if ($(this).attr("value") == "man_power") {
            $("#cal_manpower_title").show();
            $("#calendar_manpower").show();
            $("#cal_vehicle_title").hide();
            $("#calendar_vehicles").hide();
            $("#cal_equipment_title").hide();
            $("#calendar_equipment").hide();
        }
        else if ($(this).attr("value") == "vehicles") {
            $("#cal_manpower_title").hide();
            $("#calendar_manpower").hide();
            $("#cal_vehicle_title").show();
            $("#calendar_vehicles").show();
            $("#cal_equipment_title").hide();
            $("#calendar_equipment").hide();
        }
        else if ($(this).attr("value") == "equipments") {
            $("#cal_manpower_title").hide();
            $("#calendar_manpower").hide();
            $("#cal_vehicle_title").hide();
            $("#calendar_vehicles").hide();
            $("#cal_equipment_title").show();
            $("#calendar_equipment").show();
        }
        else {
            $("#cal_manpower_title").show();
            $("#calendar_manpower").show();
            $("#cal_vehicle_title").hide();
            $("#calendar_vehicles").hide();
            $("#cal_equipment_title").hide();
            $("#calendar_equipment").hide();
        }
    });
}).change();



function Calendarload() {
    /* *****  Full Calender ***** */
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* * Cal Manpower * */

    $('#calendar_manpower').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,resourceDay'
        },
        defaultView: 'month',
        editable: true,
        droppable: true,
        resources: [
          {
              'id': 'resource1',
              'name': 'Resource 1'
          },
          {
              'id': 'resource2',
              'name': 'Resource 2'
          },
          {
              'id': 'resource3',
              'name': 'Resource 3'
          },
          {
              'id': 'resource4',
              'name': 'Resource 4'
          },
          {
              'id': 'resource5',
              'name': 'Resource 5'
          },
          {
              'id': 'resource6',
              'name': 'Resource 6'
          },
          {
              'id': 'resource7',
              'name': 'Resource 7'
          }
        ],
        events: [
          {
              title: 'Event 1',
              start: new Date(y, m, d, 9, 0),
              end: new Date(y, m, d, 15, 0),
              allDay: false,
              resources: ['resource1'],
              color: '#AC6BEC'
          },
          {
              title: 'Event 2',
              start: new Date(y, m, d, 15, 30),
              end: new Date(y, m, d, 17, 0),
              allDay: false,
              resources: ['resource1'],
              color: '#AC6BEC'
          },
          {
              title: 'Event 3',
              start: new Date(y, m, d + 1, 9, 0),
              allDay: true,
              resources: ['resource1'],
              color: '#AC6BEC'
          },
          {
              title: 'Event 4',
              start: new Date(y, m, d + 1, 10, 0),
              start: new Date(y, m, d + 1, 16, 0),
              allDay: false,
              resources: ['resource2'],
              color: '#008FFB'
          },
          {
              id: 777,
              title: 'Event 5',
              start: new Date(y, m, d, 12, 0),
              end: new Date(y, m, d, 17, 0),
              allDay: false,
              resources: ['resource3'],
              color: '#304B58'
          },
          {
              title: 'Event 6',
              start: new Date(y, m, d, 8, 0),
              end: new Date(y, m, d, 14, 30),
              allDay: false,
              resources: ['resource4'],
              color: '#A2CF37'
          },
          {
              title: 'Event 7',
              start: new Date(y, m, d - 1, 16, 0),
              allDay: false,
              resources: ['resource5'],
              color: '#FDC006'
          },
          {
              id: 999,
              title: 'Event 8',
              start: new Date(y, m, d + 3, 16, 0),
              allDay: false,
              resources: ['resource6'],
              color: '#8DC327'
          }
        ],
        // the 'ev' parameter is the mouse event rather than the resource 'event'
        // the ev.data is the resource column clicked upon
        selectable: true,
        selectHelper: true,
        select: function (start, end, ev) {
            console.log(start);
            console.log(end);
            console.log(ev.data); // resources
        },
        eventClick: function (event) {
            console.log(event);
        },
        eventDrop: function (event, delta, revertFunc) {
            console.log(event);
        }
    });

    /* * Cal Vehicles * */

    $('#calendar_vehicles').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,resourceDay'
        },
        defaultView: 'month',
        editable: true,
        droppable: true,
        resources: [
          {
              'id': 'vehicle1',
              'name': 'Vehicle 1'
          },
          {
              'id': 'vehicle2',
              'name': 'Vehicle 2'
          },
          {
              'id': 'vehicle3',
              'name': 'Vehicle 3'
          },
          {
              'id': 'vehicle4',
              'name': 'Vehicle 4'
          },
          {
              'id': 'vehicle5',
              'name': 'Vehicle 5'
          },
          {
              'id': 'vehicle6',
              'name': 'Vehicle 6'
          }
        ],
        events: [
          {
              title: 'Drop 1',
              start: new Date(y, m, d, 9, 0),
              end: new Date(y, m, d, 15, 0),
              allDay: false,
              resources: ['vehicle3'],
              color: '#AC6BEC'
          },
          {
              title: 'Pickup 2',
              start: new Date(y, m, d, 15, 30),
              end: new Date(y, m, d, 17, 0),
              allDay: false,
              resources: ['vehicle3'],
              color: '#AC6BEC'
          },
          {
              title: 'Drop 3',
              start: new Date(y, m, d + 1, 9, 0),
              allDay: true,
              resources: ['vehicle3'],
              color: '#AC6BEC'
          },
          {
              title: 'Pickup 4',
              start: new Date(y, m, d + 1, 10, 0),
              start: new Date(y, m, d + 1, 16, 0),
              allDay: false,
              resources: ['vehicle1'],
              color: '#008FFB'
          },
          {
              id: 777,
              title: 'Drop 5',
              start: new Date(y, m, d, 12, 0),
              end: new Date(y, m, d, 17, 0),
              allDay: false,
              resources: ['vehicle7'],
              color: '#304B58'
          },
          {
              title: 'Pickup 6',
              start: new Date(y, m, d, 8, 0),
              end: new Date(y, m, d, 14, 30),
              allDay: false,
              resources: ['vehicle4'],
              color: '#A2CF37'
          },
          {
              title: 'Drop 7',
              start: new Date(y, m, d - 1, 16, 0),
              allDay: false,
              resources: ['vehicle5'],
              color: '#FDC006'
          },
          {
              id: 999,
              title: 'Drop 8',
              start: new Date(y, m, d + 3, 16, 0),
              allDay: false,
              resources: ['vehicle6'],
              color: '#8DC327'
          }
        ],
        // the 'ev' parameter is the mouse event rather than the resource 'event'
        // the ev.data is the resource column clicked upon
        selectable: true,
        selectHelper: true,
        select: function (start, end, ev) {
            console.log(start);
            console.log(end);
            console.log(ev.data); // resources
        },
        eventClick: function (event) {
            console.log(event);
        },
        eventDrop: function (event, delta, revertFunc) {
            console.log(event);
        }
    });

    /* * Cal Equipments * */

    $('#calendar_equipment').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,resourceDay'
        },
        defaultView: 'month',
        editable: true,
        droppable: true,
        resources: [
          {
              'id': 'equipment1',
              'name': 'Equipment 1'
          },
          {
              'id': 'equipment2',
              'name': 'Equipment 2'
          },
          {
              'id': 'equipment3',
              'name': 'Equipment 3'
          },
          {
              'id': 'equipment4',
              'name': 'Equipment 4'
          },
          {
              'id': 'equipment5',
              'name': 'Equipment 5'
          },
          {
              'id': 'equipment6',
              'name': 'Equipment 6'
          }
        ],
        events: [
          {
              title: 'Task 1',
              start: new Date(y, m, d, 9, 0),
              end: new Date(y, m, d, 15, 0),
              allDay: false,
              resources: ['equipment3'],
              color: '#AC6BEC'
          },
          {
              title: 'Task 2',
              start: new Date(y, m, d, 15, 30),
              end: new Date(y, m, d, 17, 0),
              allDay: false,
              resources: ['equipment3'],
              color: '#AC6BEC'
          },
          {
              title: 'Task 3',
              start: new Date(y, m, d + 1, 9, 0),
              allDay: true,
              resources: ['equipment3'],
              color: '#AC6BEC'
          },
          {
              title: 'Task 4',
              start: new Date(y, m, d + 1, 10, 0),
              start: new Date(y, m, d + 1, 16, 0),
              allDay: false,
              resources: ['equipment1'],
              color: '#008FFB'
          },
          {
              id: 777,
              title: 'Task 5',
              start: new Date(y, m, d, 12, 0),
              end: new Date(y, m, d, 17, 0),
              allDay: false,
              resources: ['equipment6'],
              color: '#304B58'
          },
          {
              title: 'Task 6',
              start: new Date(y, m, d, 8, 0),
              end: new Date(y, m, d, 14, 30),
              allDay: false,
              resources: ['equipment4'],
              color: '#A2CF37'
          },
          {
              title: 'Task 7',
              start: new Date(y, m, d - 1, 16, 0),
              allDay: false,
              resources: ['equipment5'],
              color: '#FDC006'
          },
          {
              id: 999,
              title: 'Task 8',
              start: new Date(y, m, d + 3, 16, 0),
              allDay: false,
              resources: ['equipment7'],
              color: '#8DC327'
          }
        ],
        // the 'ev' parameter is the mouse event rather than the resource 'event'
        // the ev.data is the resource column clicked upon
        selectable: true,
        selectHelper: true,
        select: function (start, end, ev) {
            console.log(start);
            console.log(end);
            console.log(ev.data); // resources
        },
        eventClick: function (event) {
            console.log(event);
        },
        eventDrop: function (event, delta, revertFunc) {
            console.log(event);
        }
    });

}



$(".sel_resource").change(function () {
    $(this).find("option:selected").each(function () {
        if ($(this).attr("value") == "1") {
            $(".ser_no").show();
            $(".name_res,.veh_no").hide();
        }
        else if ($(this).attr("value") == "2") {
            $(".name_res").show();
            $(".veh_no,.ser_no").hide();
        }
        else if ($(this).attr("value") == "3") {
            $(".veh_no").show();
            $(".name_res,.ser_no").hide();
        }
        else if ($(this).attr("value") == "0") {
            $(".name_res,.ser_no,.veh_no").hide();
        }
    });

});

$(document).on('click', '.btn_calendar', function () {
    $(".show_calendar_view,.btn_grid").show();
    $(".show_table_resource,.btn_calendar").hide();
    Calendarload();
})


$(document).on('click', '.btn_grid', function () {
    $(".show_table_resource,.btn_calendar").show();
    $(".show_calendar_view,.btn_grid").hide();
})