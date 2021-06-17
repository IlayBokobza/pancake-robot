package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os/exec"
)

func uploadFile(w http.ResponseWriter, r *http.Request) {

	// Parse our multipart form, 10 << 20 specifies a maximum
	// upload of 10 MB files.
	r.ParseMultipartForm(10 << 20)

	// the Header and the size of the file
	file, _, err := r.FormFile("upload")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()

	bytes, _ := ioutil.ReadAll(file)
	ioutil.WriteFile("./data/img.png", bytes, 0666)

	//run python script
	cmd := exec.Command("python3", "makeMap.py")
	err = cmd.Run()

	if err != nil {
		fmt.Println(err)
		return
	}
}

func main() {

	//upload
	http.HandleFunc("/upload", uploadFile)

	//website
	http.Handle("/", http.FileServer(http.Dir("./public")))

	//start server
	fmt.Println("listening on port 3000")
	http.ListenAndServe(":3000", nil)
}
