UserMileage.Run = DS.Model.extend({
  distance: DS.attr('number'),
  time: DS.attr('number'),
  notes: DS.attr('string'),
  date: DS.attr('date'),

  getDayOfYear: function() {
    var jan1 = new Date(this.date.getFullYear(), 0, 1);
    return Math.ceil((this.date - jan1) / 86400000);
  }
})

UserMileage.Run.FIXTURES = [
  {
    id: 1,
    distance: 11,
    date: new Date(2013,11,23)
  },
  {
    id: 2,
    distance: 8,
    date: new Date(2013,11,25)
  },
  {
    id: 3,
    distance: 8.69,
    date: new Date(2013,11,26)
  },
  {
    id: 4,
    distance: 8.63,
    date: new Date(2013,11,27)
  },
  {
    id: 6,
    distance: 7.36,
    date: new Date(2013,11,28)
  },
  {
    id: 7,
    distance: 8.07,
    date: new Date(2013,11,29)
  },
  {
    id: 8,
    distance: 11.9,
    date: new Date(2013,11,30)
  },
  {
    id: 9,
    distance: 4.05,
    date: new Date(2013,12,1)
  }
];