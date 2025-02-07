import numpy as np

def polynomial(
  coefs: list[float], 
  t_range: list[float] = [0, 1], 
  num_points: int = 11
):
  """
  Evaluates a polynomial at evenly spaced points.
  
  Args:
  - coefs (list[float]): Coefficients of the polynomial in increasing order (i.e., [a_0, a_1, ..., a_n] represents a_0 + a_1*x + ... + a_n*x^n).
  - t_range (list[float]): The range [x_min, x_max] over which to evaluate the polynomial.
  - num_points (int): The number of points to generate between x_min and x_max.
  
  Returns:
  - tuple[list[float], list[float]]: Two lists: x values and corresponding y values.
  """
  
  # Generate evenly spaced x values
  x = np.linspace(t_range[0], t_range[1], num_points)
  
  # Compute the polynomial values using Horner's method for efficiency
  y = np.polyval(list(reversed(coefs)), x)
  
  # Convert numpy arrays to lists before returning
  return x.tolist(), y.tolist()
