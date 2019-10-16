let defaultCity = '贵港'
try {
  if (localStorage.getItem('city')) {
    defaultCity = localStorage.getItem('city')
  }
} catch (e) {

}
export default {
  city: defaultCity
}
