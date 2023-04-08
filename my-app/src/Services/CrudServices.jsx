import Configuration from './../Configuration/Configuration'
import AxiosService from './AxiosServices'

const axios = new AxiosService()
//const Config = new Configuration()

export default class CrudServices {
  InsertExcelRecord(data,Header) {
    console.log('data : ', data, ' Url : ', Configuration.InsertExcelRecord)
    return axios.PostData(Configuration.InsertExcelRecord, data, Header)
  }
}
