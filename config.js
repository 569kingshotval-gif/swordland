/* Kingshot sign-up page: the only file you edit when a link changes. Paste each link between the quotes. */

/* LEADERSHIP: paste the form links between the quotes. Nothing else needs to change.
   Swordland: Settings tab of the Swordland sheet, rows 20 to 23.
   KvK: the link of the Troops form and the link of the Availability form. */
const LINKS = {
  kvk: {
    troops: 'https://docs.google.com/forms/d/e/1FAIpQLSd2r5T1JmWS-FA1wN1goMqfKL_ayff55JFMNQdYvhLBpkBu5Q/viewform',
    availability: 'https://docs.google.com/forms/d/e/1FAIpQLSf5bqIvntEfnZFxZBk1a_wPygvRoZ17BYEDQcFApm4uIbksnw/viewform'
  },
  swordland: {
    en: 'https://docs.google.com/forms/d/e/1FAIpQLScmxyz0MxmaSAt6IbWzOA7ENtshiZSgz46ViKD8QaxVZFJcqg/viewform',
    es: 'https://docs.google.com/forms/d/e/1FAIpQLSf9NEFrcNCD5l_Ybrw1MYdVxWn_dE7fKfHRCMjYWrHKVJMIsg/viewform',
    it: 'https://docs.google.com/forms/d/e/1FAIpQLSeL9PzjaJ6EWoZ_mVxil4OuBwkLKGpRZCDFi2WXIIr0W-pjFg/viewform',
    ar: 'https://docs.google.com/forms/d/e/1FAIpQLSdgKTSzdlHplCmQF79zcjsyO-Dctzsm--IKGFn6AjyFeLQKSQ/viewform'
  }
};

/* LEADERSHIP: address of the Buffs Poll web app (Apps Script > Deploy > Web app, ends with /exec). */
const POLL_URL = 'https://script.google.com/macros/s/AKfycbxQGJed6nIAgqz2Mt7TqPe1Yz7MC0kz3JnFFnH9EzXziCIKajDKR8i45RuN_2oj_75Bmw/exec';

/* LEADERSHIP: address of the Swordland web app (Swordland sheet > Apps Script > Deploy > Web app, ends with /exec). */
const TEAMS_URL = 'https://script.google.com/macros/s/AKfycbzvlocTMiz3xZk404rmSnEWsW7EFqCcL39FZGqixSh3csegA8jw7acDak17d2V8gbA/exec';
