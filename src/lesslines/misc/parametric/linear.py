class Linear:
  def __init__(self, coef1 : list[float], coef2 : list[float]):
    """
    Initialize a linear parametric equation.
    
    Args:
    -----
    coef1 : list[float]
      Coefficients of first linear equation x = a0 + b0 t.
    coef2 : list[float]
      Coefficients of second linear equation y = a1 + b1 t.
    """
    self.a = [coef1[0], coef2[0]]
    self.b = [coef1[1], coef2[1]]

  def get_coefs(self):
    """
    Return coefficients of the two linear equations.
    
    Returns:
    --------
    a, b : tuple[list[float], list[float]]
        A tuple containing:
        - a: List of zeroth coefficients (intercepts),
        - b: List of first coefficients (slopes).
    """
    return self.a, self.b

  def get_xy(self, ti : float, dt: float, num_points : int = 10):
    """
    Return x and y coordinates.
    
    Args:
    -----
    ti : float
      Initial valur of parametric variable.
    dt : float
      Step of increment of parametric variable.
    num_points : int, optional
      Number of points (x, y) to generate (default is 10).
    
    Returns:
    --------
    x, y : tuple[list[float], list[float]]
        A tuple containing:
        - x: List of x coordinates,
        - y: List of y coordinates.
    """
    x = []
    y = []
    for i in range(num_points):
      x.append(self.a[0] + self.b[0] * (ti + i * dt))
      y.append(self.a[1] + self.b[1] * (ti + i * dt))
    return x, y
