from PIL import Image
import json

imgSize = 50,50

def makeMap():
    file = Image.open('./data/img.png')
    file = file.convert('L')
    file = file.resize(imgSize)
    file.save('./data/img2.png')

    imgData = file.load()

    #converts to json
    output = []
    for y in range(imgSize[0]):
        newLine = []
        for x in range(imgSize[1]):
            pixelValue = imgData[x,y]
            if pixelValue > 80:
                newLine.append(1)
            else:
                newLine.append(0)
            
        output.append(newLine)

    newFile = open('./data/map.json','w')
    newFile.write(json.dumps(output))

makeMap()
print("done")