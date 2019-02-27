package xyz.erupt.core.util;

import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by liyuepeng on 11/7/18.
 */
public class ReflectUtil {

    //递归查找类字段
    public static Field findClassAllField(Class clazz, String fieldName) {
        Field field = null;
        while (clazz != null) {
            try {
                field = clazz.getDeclaredField(fieldName);
                if (null != field) {
                    break;
                }
            } catch (NoSuchFieldException e) {
                clazz = clazz.getSuperclass();
            }
        }
        return field;
    }

    //获取字段的泛型名
    public static List<String> getFieldGenericName(Field field) {
        List<String> names = new ArrayList<>();
        Type gType = field.getGenericType();
        if (gType instanceof ParameterizedType) {
            Type[] typeArguments = ((ParameterizedType) gType).getActualTypeArguments();
            for (int i = 0; i < typeArguments.length; i++) {
                String[] gArray = typeArguments[i].getTypeName().split("\\.");
                names.add(gArray[gArray.length - 1]);
            }
        }
        return names;
    }
}