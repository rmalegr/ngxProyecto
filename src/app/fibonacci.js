function fibonacci(numero, array) {
  if (numero == 0) {
    return 0;
  } else if (numero == 1) {
    return 1;
  } else {
    return fibonacci(numero - 1) + fibonacci(numero - 2);
  }
}
