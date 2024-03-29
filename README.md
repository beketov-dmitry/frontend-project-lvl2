### Hexlet tests and linter status:
[![Actions Status](https://github.com/beketov-dmitry/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/beketov-dmitry/frontend-project-lvl2/actions)
[![Node CI](https://github.com/beketov-dmitry/frontend-project-lvl2/actions/workflows/myActions.yml/badge.svg)](https://github.com/beketov-dmitry/frontend-project-lvl2/actions/workflows/myActions.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/aca958adbf36c8290691/maintainability)](https://codeclimate.com/github/beketov-dmitry/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/aca958adbf36c8290691/test_coverage)](https://codeclimate.com/github/beketov-dmitry/frontend-project-lvl2/test_coverage)

## Description
### This programm determines the difference between two data structures. 
<br>

**Utility features:**

- Supports YAML and JSON input formats
- Report can be generated in the form of a plain text, JSON output or stylish format

<br>

**Installation** 
<br>
To be able to run this program you need to have **Node.JS** installed.
```
git clone https://github.com/metastasio/frontend-project-44.git

cd frontend-project-44

make install

npm link
``` 
<br>

**Usage example:**
<br>
You can choose the output format by using the flag **--format (-f)** with either **plain**, **JSON** or **stylish**. <br>
Default output format is 'stylish':
```
gendiff path/to/file1 path/to/file2
```
[![asciicast](https://asciinema.org/a/ADuQicl5F0uwd12CpK3p9yDdb.svg)](https://asciinema.org/a/ADuQicl5F0uwd12CpK3p9yDdb)
<br>

Plain output: <br>
```
gendiff -f plain path/to/file1 path/to/file2
```
[![asciicast](https://asciinema.org/a/cmvPxD1DPjbTdoTIr2aBcBtkz.svg)](https://asciinema.org/a/cmvPxD1DPjbTdoTIr2aBcBtkz)
<br>
JSON output: <br>
```
gendiff -f json path/to/file1 path/to/file2
```
[![asciicast](https://asciinema.org/a/xTaRfXiL8dPQmyF5JSQVn87Zb.svg)](https://asciinema.org/a/xTaRfXiL8dPQmyF5JSQVn87Zb)
