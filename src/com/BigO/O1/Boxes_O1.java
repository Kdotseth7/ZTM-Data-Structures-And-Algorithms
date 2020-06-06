package com.BigO.O1;

public class Boxes_O1 {

    public static void main(String[] args) {
        int[] boxes = {1, 2, 3, 4, 5};
        printFirstBox(boxes);
        printFirst2Boxes(boxes);
    }

    public static void printFirstBox(int[] boxes) {
        System.out.println(boxes[0]); //O(1) --> Constant Time
    }

    public static void printFirst2Boxes(int[] boxes) {
        System.out.println(boxes[0]);
        System.out.println(boxes[1]);
    } //O(1) since constant no. of operations irrespective of elements, i.e., 2.
}
