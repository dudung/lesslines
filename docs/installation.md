# Installation Guide
Follow these steps to install **lesslines** on your system.


## Installing with `pip`
The simplest way to install lesslines is via pip:

```bash
pip install lesslines
```

## Installing in a Virtual Environment
For a clean and isolated setup, use a virtual environment:

```bash
# Create and activate a virtual environment
python -m venv lesslines-env
source lesslines-env/bin/activate  # On Windows: lesslines-env\Scripts\activate

# Install lesslines
pip install lesslines
```

## Installing from Source
If you want to use the latest development version:

+ Clone the repository:
```bash
git clone https://github.com/yourusername/lesslines.git
cd lesslines
```
+ Install the package:
```bash
pip install .
```

## Troubleshooting
+ Missing Dependencies <br>
Ensure you have the latest version of pip:
```bash
pip install --upgrade pip
```
+ Unsupported Python Version <br>
lesslines requires Python 3.8 or higher. Check your version: <br>
```bash
python --version
```

## Next Steps
Once installed, head over to the [Usage Guide](usage.md) to learn how to use lesslines effectively.
