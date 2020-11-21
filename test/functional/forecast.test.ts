import supertest from 'supertest';

describe('Beach forecast fuctional tests', () => {
   it('should return a a forecast with just a few times', async() => {
      const { body, status } = await supertest(app).get('/forecast');
      expect(status).toBe(200);
      expect(body).toBe();
   });
});