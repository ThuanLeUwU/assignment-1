import React from 'react'
// import { useSelector } from 'react-redux'

const Payment = () => {

    return (
        <div className="container">
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3 m-3">Thông tin thanh toán</h4>
                <form className="needs-validation" novalidate="">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="address" className="form-label">Họ</label>
                            <input type="text" className="form-control" id="address" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="address" className="form-label">Tên</label>
                            <input type="text" className="form-control" id="address" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className='col-12'>
                            <label htmlFor="address" className="form-label">Khu vực/Quốc gia</label>
                            <h3 className="mb-3">Việt Nam</h3>
                        </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Tỉnh/Thành phố</label>
                            <input type="text" className="form-control" id="address" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Quận/Huyện</label>
                            <input type="text" className="form-control" id="address" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Phường/ Xã</label>
                            <input type="text" className="form-control" id="address" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                    </div>
                </form>

            </div>
            <div className="col-12 ">
                <h4 className="mb-3 m-3">Thông tin đơn hàng</h4>
                <table class="table table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Đơn giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>....</td>
                            <td>....</td>
                            <td>@....</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            
                            <td colspan="3">Tổng</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <button className=" btn btn-info btn-lg ml-auto" type="submit">Tiến hành hiến máu</button>
            
        </div>
    )
}

export default Payment;