import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base'

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
if (Meteor.isClient) {
	Template.register.events({
		'submit form': function(event, template) {
			event.preventDefault();
			// var username = event.target.inputUsername.value
			var username = template.find('#inputUsername').value
			var email = template.find('#inputEmail').value
			var password = template.find('#inputPassword').value


			Accounts.createUser({
				username,
				email,
				password
			});
			console.log('form submitted...........', {email, password});
		}
	});

	Template.login.events({
		'submit form': function(event, template) {
			event.preventDefault();
			var username = template.find('#loginUsername').value
			var password = template.find('#loginPassword').value
			console.log('form submitted...........', {username, password});

			Meteor.loginWithPassword(username, password);
		}
	});

	Template.dashboard.events({
		'click #dashboard': function(event, template) {
			Meteor.logout();

		}
	});
}
