let app = new Vue ({
  el: '#app',
  data: {
    pageTitle:'Events',
    userEvents: [],
    newEvent: {
      userId: 0,
      title: '',
      date:'',
      location: '',
      cost: '',
      description: '',
      keywords: ''
      }
  },
  methods: {
    getAll: function (event) {
      axios.post('http://127.0.0.1:3000/search/', event)
        .then(function (response) {
          // console.log(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    addEvent: function (event) {
      axios.post('http://127.0.0.1:3000/add-event/', event)
        .then(function (response) {
          console.log(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    deleteEvent: function(id) {
      axios.delete('http://127.0.0.1:3000/delete-event/' + id)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    updateEvent: function(event) {
      axios.patch('http://127.0.0.1:3000/update-event/', event)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
},
  created: function() {
    let _this = this;
    axios.get('http://127.0.0.1:3000/userEvents')
      .then(function (response) {
        _this.userEvents = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
});
