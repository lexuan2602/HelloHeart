import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import { FlatList } from "react-native";
import { Image } from "react-native";
// import Colors from "../Shared/Colors";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HeartRadio() {
  // const [courseList,setCourseList]=useState([])
  const navigation = useNavigation();
  // useEffect(()=>{

  //     getCourseList();
  // },[])

  // const getCourseList=async()=>{
  //     const resp=(await GlobalApi.getCourseList(type)).data;
  //     const result=resp.data.map((item)=>({
  //         id:item.id,
  //         name:item.attributes.name,
  //         description:item.attributes.description,
  //         image:item.attributes.image.data.attributes.url,
  //         Topic:item.attributes.Topic

  //     }))

  //     setCourseList(result);
  // }
  const courseList = [
    {
      id: 1,
      name: "Yoga for heart 1",
      image:
        "https://res.cloudinary.com/dbvvth5qb/image/upload/v1712684863/14324292187471101089_8e0dccadb9.jpg",
      Topic: {
        id: 1,
        name: "Yoga 1",
        Link: "https://www.youtube.com/watch?v=XBaisoFIa98&list=PLaBeGKL1tOU0FuOxkLHFy_zOlIqOWUcNc&index=10",
      },
    },
    {
      id: 2,
      name: "Yoga for heart 2",
      image:
        "https://res.cloudinary.com/dbvvth5qb/image/upload/v1712684863/14324292187471101089_8e0dccadb9.jpg",
      Topic: {
        id: 1,
        name: "Yoga 1",
        Link: "https://www.youtube.com/watch?v=XBaisoFIa98&list=PLaBeGKL1tOU0FuOxkLHFy_zOlIqOWUcNc&index=10",
      },
    },
  ];
  const onPressCourse = (course) => {
    navigation.navigate("radio-detail", {
      courseData: course,
      courseType: "text",
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textTransform: "capitalize",
          marginBottom: 3,
        }}
      >
        {/* {type} Course */}
        Advancea
      </Text>

      <FlatList
        data={courseList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: Colors.white,
              marginRight: 10,
              borderRadius: 10,
            }}
            onPress={() => onPressCourse(item)}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 180,
                height: 100,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                resizeMode: "cover",
              }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {item.name}
              </Text>
              <Text style={{ color: Colors.gray, fontWeight: "300" }}>
                2 Lessons
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
