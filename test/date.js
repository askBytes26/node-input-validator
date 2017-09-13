const assert = require('assert');

const should = require('should');

const Validator = require('../index');

let r = {};

describe('Dates', function() {

	describe('dateFormat', function() {

	    it('should return true', async () => {


	    	let v = new Validator(r, {dob:'1992-02-28'}, {dob:'required|dateFormat:YYYY-MM-DD'});

	    	let matched = await v.validate();

	    	assert.equal(matched, true);
	      	

	    });	  	  
	

	    it('should return false', async () => {


	    	let v = new Validator(r, {dob:'1992-28-02'}, {dob:'required|dateFormat:YYYY-MM-DD'});

	    	let matched = await v.validate();

	    	assert.equal(matched, false);
	      	

	    });	  
	  
	});

	describe('before', function() {

	    it('should return true', async () => {


	    	let v = new Validator(r, {dob:'1990-02-28'}, {dob:'required|dateFormat:YYYY-MM-DD|before:1991-01-01'});

	    	let matched = await v.validate();

	    	assert.equal(matched, true);
	      	

	    });	  	  
	

	    it('should return false', async () => {


	    	let v = new Validator(r, {dob:'1993-28-02'}, {dob:'required|dateFormat:YYYY-MM-DD|before:1992-12-31'});

	    	let matched = await v.validate();

	    	assert.equal(matched, false);
	      	

	    });	  
	  
	});


});