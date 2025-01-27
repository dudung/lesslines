# Usage Guide

This guide demonstrates how to use lesslines in various scenarios, along with code examples.

## Basic Workflow

### Importing lesslines
Start by importing the package and exploring its basic functionality:
```python
from lesslines import core

# Example: Simplify a numerical calculation
data = [1, 2, 3, 4]
result = core.mean(data)
print("Mean of the data:", result)
```

### Example: Numerical Integration
lesslines simplifies operations like integration:

```python
from lesslines.core import integrate

# Define a function to integrate
def f(x):
    return x**2

# Perform integration
result = integrate(f, 0, 10)
print("Integration result:", result)
```

### Example: Using Utility Functions
lesslines includes utilities to handle common numerical tasks:

```python
from lesslines.utils import normalize

data = [10, 20, 30, 40]
normalized_data = normalize(data)
print("Normalized data:", normalized_data)
```

## Advanced Usage

### Custom Functions
You can extend lesslines functionality by creating custom wrappers for your own workflows:

```python
from lesslines.core import custom_function

result = custom_function(lambda x: x**3, [1, 2, 3])
print("Custom function results:", result)
```

### Integrating with NumPy and SciPy
lesslines plays nicely with other popular libraries:

```python
import numpy as np
from lesslines.core import transform

array = np.array([1, 2, 3, 4])
transformed_array = transform(array)
print("Transformed array:", transformed_array)
```

## Next Steps
+ Explore the API reference (coming soon) for detailed information about available functions.
+ Check out the examples folder in the repository for real-world use cases.
