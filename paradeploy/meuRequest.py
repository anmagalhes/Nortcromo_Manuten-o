import requests

payload = {'key1': 'value1', 'key2': 'value2'}
url = "https://script.google.com/macros/s/AKfycbwD2vMdoXgvLAKSQ5uGc6lD0cffbRUm1n9oz_FLzYWMg7X6r9MEd2dcJ8hVltCx-FCZvg/exec"
r = requests.post(url, data=payload)
x = r.json()
print(x)

