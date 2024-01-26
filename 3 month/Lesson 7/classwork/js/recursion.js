console.log(pow(2, 5));

function pow(son, daraja) {
	if (daraja === 0) {
		return 1;
	}

	return son * pow(son, daraja - 1);
}
