You need to first have a running kafka cluster with a ‘btc-price’ topic.

1. First run questDB on docker using 
    
    ```jsx
    docker run -p 9000:9000 -p 9009:9009 questdb/questdb
    ```
    
2. Then run the producer server 
For the producer you also need to add a .env file containing your CryptoCompare API key as such
`CC_API_KEY=<YOUR API KEY>`
    
    ```jsx
    cd serveur-btc
    pnpm i
    pnpm start
    ```
    
3. Run the consumer server 
    
    ```jsx
    cd consumer
    pnpm i 
    pnpm start
    ```
    
4. Run the frontend 
    
    ```jsx
    cd client
    pnpm i
    pnpm start
    ```
    

Go to [http://localhost:5173](http://localhost:5173) . Refreshing the webpage will cause the consumer to break. If this happens re run the consumer and refresh the webpage.
