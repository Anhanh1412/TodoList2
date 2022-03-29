import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className='head'>
        <ul>
          <li><img src="https://xuanthanhphat.vn/wp-content/uploads/2021/10/logo.png" /></li>
          <li>Công ty</li>
          <li>Nhân sự</li>
          <li>Chấm công</li>
          <li>Cấu hình</li>
        </ul>
        <ul>
          <li>icon</li>
          <li>icon</li>
        </ul>
      </header>
      <div>
        <div className='top-conten'>Cấu hình chấm công</div>
      </div>
      <div className='top-table'>
        <div className='chosen'>Ca làm việc</div>
        <div className='not-chosen'>Phụ cấp</div>
      </div>
      <div className='funtion'>
        <input className='search' placeholder='Tìm kiếm'></input>
        <button className='add'>Thêm ca làm việc</button>
      </div>
      <table className='table'>
        <tr className='head-table'>
          <th>STT</th>
          <th>Tên ca</th>
          <th>Giờ công</th>
          <th>Thời gian</th>
          <th>Ngày làm trong tuần</th>
          <th>Hệ số lương </th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
        <tr className='body-table-1'>
          <td>1</td>
          <td>Ca làm thêm giờ</td>
          <td>3</td>
          <td>04:55-09:00</td>
          <td>T2 T3 T4 T5 T6</td>
          <td>1 </td>
          <td>True</td>
          <td><button className='add'>Sửa</button></td>
        </tr>

        <tr className='body-table-2'>
          <td>2</td>
          <td>Ca làm thêm giờ</td>
          <td>3</td>
          <td>04:55-09:00</td>
          <td>T2 T3 T4 T5 T6</td>
          <td>1 </td>
          <td>True</td>
          <td><button className='add'>Sửa</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
