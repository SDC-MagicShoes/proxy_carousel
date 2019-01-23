import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 200,
  duration: '120s',
  rps: 2000
}

export default function() {
  http.get('http://localhost:3000/9320132/similar');
  sleep(1);
}
