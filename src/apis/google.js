import { google } from 'googleapis';
import { clientId, scope } from '../constants/google';

const oauth2Client = new google.auth.OAuth2(clientId, scope);

export { oauth2Client };
