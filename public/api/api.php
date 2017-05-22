<?php

class Api
{
	/**
	 * Objeto request
	 * @var object
	 */
	private $request;

	/**
	 * Url estática para obtener datos
	 * @var string
	 */
	private $urlStatic = 'https://mfwkweb-api.clarovideo.net/services/content/serie?api_version=v5.4&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=q12fva9pjnhauhd4jg0d02e0t1&group_id=';

	public function __construct()
	{
		$this->_processRequest();
	}

	/**
	 * Regresa el action de un método solicitado por el request
	 *
	 */
	private function _processRequest()
	{
		if (!empty($_REQUEST)) {
			$this->request = json_decode(json_encode($_REQUEST));
		} else {
			$this->request = json_decode(file_get_contents('php://input'));
		}

		$action = $this->request->action;

		if (empty($action)) {
			$message = array('error' => 'No se ha solicitado action');
			$this->reply($message, 400);
		} else {
			if (method_exists($this, $action)) {
				$this->$action();
			} else {
				$message = array('error' => 'El action solicitado no existe.');
				$this->reply($message, 400);
			}
		}
	}

	/**
	 * Regresa JSON con los datos y estatus de la petición de temporadas
	 *
	 * @return JSON
	 */
	private function getSeason()
	{
		$grupoId = $this->request->gid;
		$request = $this->urlStatic.$grupoId;
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL, $request);
		$json = curl_exec($ch);
		curl_close($ch);
		if (!$json) {
			$json = array('response' => null, 'status' => 1);
			$json = json_encode($json);
		}
		$protocol = (isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.1');
		$status = 200;
		header($protocol . ' ' . $status);
		header('Content-Type: application/json');
		echo $json;
		exit;
	}

}

$Api = new Api();
