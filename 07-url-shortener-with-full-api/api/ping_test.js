import { equal } from 'node:assert/strict';
import { test } from 'node:test';
import { ping } from './ping.js';

test('ping', () => {
	test('should return an HTTP handler', () => {
		const handler = ping();
		equal(typeof handler, 'function');
	});
});
