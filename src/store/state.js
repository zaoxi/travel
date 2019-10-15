let defaultCity = '贵港'
try {
  defaultCity = localStorage.getItem('city')
} catch (e) {

}
export default {
  city: defaultCity
}
