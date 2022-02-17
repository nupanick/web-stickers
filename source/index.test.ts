import request from 'supertest';
import app from './index';

describe('index', () => {
    it('says hello', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hello, World!");
    });
});
