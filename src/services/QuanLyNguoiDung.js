import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    
    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
    layDanhSachNguoiDung = (taiKhoan='') => {
        if(taiKhoan.trim()!=''){
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&taiKhoan=${taiKhoan}`)
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)

    }
    timKiemNguoiDung = (tuKhoa='') => {
        if(tuKhoa.trim()!=''){
            return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`)
        }
        return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}`)

    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`);
    }
    themNguoiDung = (thongTinNguoiDung) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,thongTinNguoiDung);
    } 
    capNhatNguoiDung = (capNhat) => {
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,capNhat);
    }
  
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
