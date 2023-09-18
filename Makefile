run: 
    docker run -d -p 3000:3000 -v monop:/app/data --rm --name crypto-swap gubinruslan1986/crypto-swap
run-dev: 
    docker run -d -p 3000:3000 -v "D:\WebProjects\Frontend\crypto-swap:/app" -v /app/node_modules:/app/node_modules --rm --name crypto-swap gubinruslan1986/crypto-swap
stop: 
		docker stop monopolyfront		

    docker run -d -p 3000:3000 -v crypto-swap:/usr/app --rm --name studio-next newimage