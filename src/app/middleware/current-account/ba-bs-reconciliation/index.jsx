import React, { useState } from 'react';
import { Button, Col, Form, ListGroup, Modal, FormControl, InputGroup, Row } from "react-bootstrap";
import Swal from 'sweetalert2';

const BaBsReconciliation = () => {

	return (
		<section className="w-100">

			<div className="ba-bs-reconciliation">
				<div className="pl-3 d-flex">Dönem: <span className="ml-3 font-weight-bold">01 01 2020</span> </div>

				<div className="row radius-blue-20 p-3">
					<div className="col-5 m-0 p-0">
						<div className="row">
							<div className="col-12">BA ( Mal veya Hizmet Alımı ) Bilgilerimiz:</div>
							<div className="col-3 text-nowrap d-flex"><span>Belge Adedi: </span> <span>0</span></div>
							<div className="col text-nowrap d-flex"><span>Toplam Bedel ( K.D.V. Hariç ): </span> <span>0,00</span></div>
						</div>
					</div>
					<div className="col m-0 p-0">
						<div className="row">
							<div className="col-12">BA ( Mal veya Hizmet Alımı ) Bilgilerimiz:</div>
							<div className="col-2 text-nowrap d-flex"><span>Belge Adedi: </span> <span>0</span></div>
							<div className="col text-nowrap d-flex"><span>Toplam Bedel ( K.D.V. Hariç ): </span> <span>0,00</span></div>
						</div>
					</div>
				</div>

				<div className="row my-3">
					<div className="col-8">
						<Form.Group as={Row} className="align-items-center">
							<Form.Label col={"auto"} className="pl-3 m-0">Başlangıç Tarihi:</Form.Label>
							<Col col={6}>
								<Form.Control className="date-time-picker" type="date" placeholder="dd.mm.yyyy" />
							</Col>
						</Form.Group>
					</div>
					<div className="col-4 m-0 p-0">
						<Form.Group as={Row}>
							<Col col={12}>
								<Row className="text-right">
									<Col col={12}>
										<Button type="button" className="btn btn-export pdf mr-3">PDF E-mail Gönder</Button>
										<Button type="button" className="btn btn-export pdf">PDF Olarak İndir</Button>
									</Col>
								</Row>
							</Col>
						</Form.Group>
					</div>
				</div>

				<div className="row m-2">
					<div className="col p-0 m-0 blue-line">
						<span className="rounded-box">BA-BS Aylık Mail Gönderimi Aboneliği</span>
					</div>
				</div>

				<div className="row">
					<div className="col-4">
					</div>

					<div className="col-8 m-0 p-0">
						<Form.Group as={Row}>
							<Col col={12}>
								<Row className="">
									<Col col={12}>
										<Form.Group as={Row}>
											<Col sm="2" className="mr-0 pr-0 d-flex align-items-center">
												E-mail Abone Listesi:
											</Col>
											<Col sm="10" className="mr-0 pr-0">
												<ListGroup className="radius-blue-10">
													<ListGroup.Item action >
														ahmet.gorgulu@yuceyazilim.com
													</ListGroup.Item>
													<ListGroup.Item action>
														arda.terekeci@yuceyazilim.com
													</ListGroup.Item>
													<ListGroup.Item action >
														hayriye.aydin@yuceyazilim.com
													</ListGroup.Item>
												</ListGroup>
											</Col>
										</Form.Group>
									</Col>
								</Row>
							</Col>
						</Form.Group>
					</div>
				</div>

				<div className="row">
					<div className="col-4">
					</div>
					<div className="col-8 m-0 p-0">
						<Form.Group as={Row}>
							<Col col={12}>
								<Row className="text-right">
									<Col col={12}>
										<Form.Group as={Row}>
											<Form.Label column sm="2" className="mt-3 mr-0 pr-0">
												Yeni E-mail Adresi:
											</Form.Label>
											<Col sm="10" className="mt-3 mr-0 pr-0">
												<Form.Control type="email" className="radius-blue-10" placeholder="" />
											</Col>
										</Form.Group>
									</Col>
								</Row>
								<Row className="text-right pt-4">
									<Col col={12}>
										<Form.Group>
											<Button className="rounded-box mr-2"
												onClick={
													() => {
														Swal.fire({
															title: 'Emin misiniz?',
															text: "Bunu geri almamak üzere silmek istiyor musunuz?",
															icon: 'warning',
															showCancelButton: true,
															confirmButtonColor: '#3a8bb8',
															cancelButtonColor: '#d40104',
															iconColor: '#d40104',
															confirmButtonText: 'Evet, sil!',
															cancelButtonText: 'Hayır, silme!',
															customClass: {
																cancelButton: 'swal-fire-button',
															    confirmButton: 'swal-fire-button'}
														}).then((result) => {
															if (result.isConfirmed) {
																Swal.fire(
																	'Silindi!',
																	'Veriler kalıcı olarak silindi.',
																	'success'
																)
															}
														})
													}
												}>
												Sil
											</Button>
											<Button className="rounded-box"onClick={
													() => {
														Swal.fire({
															title: 'Eklemek İstediğiniz Maili Giriniz',
															input: 'email',
															inputPlaceholder: 'Mail Adresi',
															showCancelButton: true,
															confirmButtonColor: '#3a8bb8',
															cancelButtonColor: '#d40104',
															iconColor: '#d40104',
															confirmButtonText: 'Ekle',
															cancelButtonText: 'Vazgeç',
															validationMessage:"Hatalı Mail Adresi",
															customClass: {
																cancelButton: 'swal-fire-button',
															    confirmButton: 'swal-fire-button'}
														}).then((result) => {
															if (result.isConfirmed) {
																Swal.fire(
																	'Mail Eklendi',
																	'Mail Listeye Eklendi',
																	'success'
																)
															}
														})
													}
												}>Ekle</Button>
										</Form.Group>
									</Col>
								</Row>
							</Col>
						</Form.Group>
					</div>
				</div>
			</div>

		</section>

	);
};

export default BaBsReconciliation;