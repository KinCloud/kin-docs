---
sidebar_position: 1
---

# Common activities

Name: __`kin.cloud/module/common`__

Version: __`v1.0`__

This module include simple http request activity and credential extraction

## Connections

### Common configuration

Method: __`common`__

#### Fields

* __`shared_secret`__: _Shared secret_

  Type: _string_

  Description: Shared secret to pass to "K-Shared-Secret" header

## Actions

### ApplyJqFilter

Source: __`kin.cloud/module/common/batch.ApplyJqFilter`__

Apply jq filter on input file

#### Authentication methods

No authentication method required

#### Inputs

* __`input`__: _input_

  Type: _io.Reader_

  Description: Input file

* __`exp`__: _exp_

  Type: _string_

  Description: JQ expression

  Default value: `""`

* __`out`__: _out_

  Type: _string_

  Description: Output object name, if empty, return jq filter result, if not empty, result will be put to object storage

  Default value: `""`

#### Outputs

* __`out`__: _out_

  Type: _interface {}_

  Description: JQ result if out is empty, url to result if out is not empty

### ApplyJqTranform

Source: __`kin.cloud/module/common/batch.ApplyJqTransform`__

Apply jq transform on each element of input file

#### Authentication methods

No authentication method required

#### Inputs

* __`input`__: _input_

  Type: _io.Reader_

  Description: Input file

* __`exp`__: _exp_

  Type: _string_

  Description: JQ expression

  Default value: `""`

* __`out`__: _out_

  Type: _string_

  Description: Result will be put to object storage with this key

  Default value: `""`

#### Outputs

* __`out`__: _out_

  Type: _interface {}_

  Description: url to result

### Csv2Json

Source: __`kin.cloud/module/common/batch.Csv2Json`__

Convert csv file to json

#### Authentication methods

No authentication method required

#### Inputs

* __`input`__: _input_

  Type: _io.Reader_

  Description: Input file

* __`output`__: _output_

  Type: _string_

  Description: Output object name

  Default value: `""`

* __`has_header`__: _Has header_

  Type: _bool_

  Description: Is first row of csv file is header row?

  Default value: `false`

* __`headers`__: _headers_

  Type: _[]string_

  Description: Headers if has_header is false

  Default value: `""`

#### Outputs

* __`url`__: _url_

  Type: _string_

  Description: Output object url

### Json2Csv

Source: __`kin.cloud/module/common/batch.Json2Csv`__

Convert json file to csv

#### Authentication methods

No authentication method required

#### Inputs

* __`input`__: _input_

  Type: _io.Reader_

  Description: Input file

* __`output`__: _output_

  Type: _string_

  Description: Output object name

  Default value: `""`

* __`write_header`__: _Write header_

  Type: _bool_

  Description: Write csv header row?

  Default value: `false`

* __`headers`__: _headers_

  Type: _[]string_

  Description: If specified, use this as headers and override field name in json input file

  Default value: `""`

#### Outputs

* __`url`__: _url_

  Type: _string_

  Description: Output object url

### Convert currency (Fixer API)

Source: __`kin.cloud/module/common/currency.(*FixerCurrency).ConvertCurrency`__

Convert currency using Fixer API

#### Authentication methods

No authentication method required

#### Inputs

* __`from`__: _From_

  Type: _string_

  Description: 

  Default value: `""`

* __`to`__: _to_

  Type: _string_

  Description: 

  Default value: `""`

#### Outputs

* __`result`__: _result_

  Type: _interface {}_

  Description: 

### Prepare Upload Url

Source: __`kin.cloud/module/common/file.PrepareUploadURL`__

Prepare url for upload file as result of some process

Metadata: 
```
{
  "icon": "\u003curl_to_activity_icon\u003e"
}
```

#### Authentication methods

No authentication method required

#### Inputs

* __`key`__: _Key_

  Type: _string_

  Description: Key

  Default value: `""`

#### Outputs

* __`url`__: _URL_

  Type: _string_

  Description: URL

### Simple HTTP GET request

Source: __`kin.cloud/module/common/http.Get`__

Simple HTTP GET request

#### Authentication methods

No authentication method required

#### Inputs

* __`url`__: _url_

  Type: _string_

  Description: Request URL

  Default value: `""`

* __`headers`__: _headers_

  Type: _map[string]string_

  Description: Optional, extra headers in form of key-value pairs attached to this GET request

  Default value: `null`

#### Outputs

* __`status`__: _status_

  Type: _string_

  Description: HTTP response status

* __`status_code`__: _status_code_

  Type: _int_

  Description: HTTP response status code

* __`headers`__: _headers_

  Type: _map[string]string_

  Description: HTTP response headers

* __`body`__: _body_

  Type: _interface {}_

  Description: HTTP response body

### HTTP Request

Source: __`kin.cloud/module/common/http.Request`__

Simple http request

#### Authentication methods

No authentication method required

#### Inputs

* __`method`__: _method_

  Type: _string_

  Description: HTTP request method

  Default value: `""`

* __`url`__: _url_

  Type: _string_

  Description: HTTP request URL

  Default value: `""`

* __`headers`__: _headers_

  Type: _map[string]string_

  Description: HTTP request headers

  Default value: `null`

* __`body`__: _body_

  Type: _interface {}_

  Description: HTTP request body

#### Outputs

* __`status`__: _status_

  Type: _string_

  Description: HTTP response status

* __`status_code`__: _status_code_

  Type: _int_

  Description: HTTP response status code

* __`headers`__: _headers_

  Type: _map[string]string_

  Description: HTTP response headers

* __`body`__: _body_

  Type: _interface {}_

  Description: HTTP response body

### Clear all data

Source: __`kin.cloud/module/common/kvstore.Clear`__

Clear all data

#### Authentication methods

No authentication method required

#### Inputs

#### Outputs

### Delete using key

Source: __`kin.cloud/module/common/kvstore.Delete`__

Delete using key

#### Authentication methods

No authentication method required

#### Inputs

* __`key`__: _key_

  Type: _string_

  Description: Key

  Default value: `""`

#### Outputs

### List all keys

Source: __`kin.cloud/module/common/kvstore.Keys`__

List all keys

#### Authentication methods

No authentication method required

#### Inputs

#### Outputs

* __`keys`__: _keys_

  Type: _[]string_

  Description: Keys

### Load persistent stored value in json format

Source: __`kin.cloud/module/common/kvstore.LoadJson`__

Load persistent store value in json format

#### Authentication methods

No authentication method required

#### Inputs

* __`key`__: _key_

  Type: _string_

  Description: Key

  Default value: `""`

#### Outputs

* __`val`__: _val_

  Type: _interface {}_

  Description: Value

* __`updated_at`__: _updated_at_

  Type: _time.Time_

  Description: Last update time

### Load persistent store value in msgpack format

Source: __`kin.cloud/module/common/kvstore.LoadMsgPack`__

Load persistent store value in msgpack format

#### Authentication methods

No authentication method required

#### Inputs

* __`key`__: _key_

  Type: _string_

  Description: Key

  Default value: `""`

#### Outputs

* __`val`__: _val_

  Type: _interface {}_

  Description: Value

* __`updated_at`__: _updated_at_

  Type: _time.Time_

  Description: Last update time

### Persistent store value in json format

Source: __`kin.cloud/module/common/kvstore.StoreJson`__

Persistent store value in json format

#### Authentication methods

No authentication method required

#### Inputs

* __`key`__: _key_

  Type: _string_

  Description: Key

  Default value: `""`

* __`val`__: _val_

  Type: _interface {}_

  Description: Value

#### Outputs

* __`updated_at`__: _updated_at_

  Type: _time.Time_

  Description: Last update time

### Persistent store value in msgpack format

Source: __`kin.cloud/module/common/kvstore.StoreMsgPack`__

Persistent store value in msgpack format

#### Authentication methods

No authentication method required

#### Inputs

* __`key`__: _key_

  Type: _string_

  Description: Key

  Default value: `""`

* __`val`__: _val_

  Type: _interface {}_

  Description: Value

#### Outputs

* __`updated_at`__: _updated_at_

  Type: _time.Time_

  Description: Last update time

## Triggers

### `webhook`

Simple webhook

#### Authentication Methods

* __`common`__

#### Fields

