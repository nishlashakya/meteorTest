import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base'

import './main.html';

if (Meteor.isClient) {
	Template.register.events({
		'submit form': function(event, template) {
			event.preventDefault();
			var username = template.find('#inputUsername').value
			var email = template.find('#inputEmail').value
			var password = template.find('#inputPassword').value

			Accounts.createUser({
				username,
				email,
				password
			});
		}
	});

	Template.login.events({
		'submit form': function(event, template) {
			event.preventDefault();
			var username = template.find('#loginUsername').value
			var password = template.find('#loginPassword').value

			Meteor.loginWithPassword(username, password);
		}
	});

	Template.dashboard.events({
		'click #dashboard': function(event, template) {
			Meteor.logout();
		}
	});
}
