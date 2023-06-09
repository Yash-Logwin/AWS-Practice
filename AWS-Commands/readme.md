# To upload a zip file in s3 bucket
# Syntax 
    aws s3 cp .\filepath-in-local s3://bucket-name/filename-in-s3-bucket
# Example
    aws s3 cp .\resize-images.zip s3://yash-image/resize-images.zip

# To update a lambda function code from the s3 bucket zip file
# Syntax
    aws lambda update-function-code --function-name lamda-func-name --s3-bucket bucket-name --s3-key zip-filename --publish
# Example
    aws lambda update-function-code --function-name resizeImages --s3-bucket yash-image --s3-key resize-images.zip --publish