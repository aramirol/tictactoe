# Tic Tac Toe

[![Docker Image CI](https://github.com/aramirol/tictactoe/actions/workflows/docker-image.yml/badge.svg)](https://github.com/aramirol/tictactoe/actions/workflows/docker-image.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=aramirol_tictactoe&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=aramirol_tictactoe)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=aramirol_tictactoe&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=aramirol_tictactoe)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=aramirol_tictactoe&metric=bugs)](https://sonarcloud.io/summary/new_code?id=aramirol_tictactoe)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=aramirol_tictactoe&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=aramirol_tictactoe)

***Tic Tac Toe***, also known as Noughts and Crosses, is a classic game played on a 3x3 grid. It involves two players who take turns marking their symbol (X or O) in empty squares with the goal of getting three of their symbols in a row, either horizontally, vertically, or diagonally. 

The game requires strategy, as players must block their opponent's moves while also planning their own winning moves. TicTacToe is a simple yet engaging game that can be enjoyed by players of all ages and skill levels. It's a quick and entertaining pastime that has been popular for generations.

This game was develeped using **[ChatGPT](https://openai.com/chatgpt)**.

<img src="https://aramirol.github.io/custom-resources/images/tictactoe_light.png" width="49%" /> <img src="https://aramirol.github.io/custom-resources/images/tictactoe_dark.png" width="49%" />

## How to

Use the `Dockerfile` to quickly deploy the game. The image used is nginxinc/nginx-unprivileged, an nginx that does not run as root and exposes port 8080, instead of the traditional 80.

```sh
$ sudo docker run -d -p 8080:8080 aramirol/tictactoe:latest
```

If you prefer, you can use the `deployment.yaml` file to deploy the game to Kubernetes. This file creates all the necessary components (remember to change the values to fit your environment)

```sh
$ kubectl apply -f deployment.yaml
```

```yml
spec:
      containers:
        - name: tictactoe
          image: aramirol/tictactoe:latest
          ports:
            - containerPort: 8080
```

## License

[![GitHub](https://img.shields.io/github/license/aramirol/tictactoe)](https://github.com/aramirol/tictactoe/blob/main/LICENSE)

See [LICENSE](https://github.com/aramirol/tictactoe/blob/main/LICENSE) to see the full text.
