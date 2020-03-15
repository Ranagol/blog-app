import moment from '../moment';

export default {
  filters: {
    formatDate(str, outputFormat = 'YYYY-MM-DD HH:mm:ss') {
      return moment(str, outputFormat);
    },

    diffForHumans(str){
      return moment(str).fromNow();
    }
  }
}